package sopraAjc.projetFinal.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import sopraAjc.projetFinal.config.UtilisateurSpring;
import sopraAjc.projetFinal.entities.Client;
import sopraAjc.projetFinal.entities.Commande;
import sopraAjc.projetFinal.entities.LigneCommande;
import sopraAjc.projetFinal.entities.LigneCommandeKey;
import sopraAjc.projetFinal.entities.Produit;
import sopraAjc.projetFinal.exceptions.ProduitException;
import sopraAjc.projetFinal.services.ClientService;
import sopraAjc.projetFinal.services.CommandeService;
import sopraAjc.projetFinal.services.ProduitService;

@Controller
@RequestMapping("/commande")
public class CommandeController {

	@Autowired
	private ProduitService produitService;
	@Autowired
	private ClientService clientService;
	@Autowired
	private CommandeService commandeService;

//	@PreAuthorize("isAuthenticated()")
//	@GetMapping("/valid")
//	public String validationPanier(Model model, Authentication authentication) {
//		UtilisateurSpring uS = (UtilisateurSpring) authentication.getPrincipal();
//		System.out.println(uS);
//		model.addAttribute("clients", clientService.getAll());
//		model.addAttribute("client", new Client());
//		return "commande/client";
//	}

	@PreAuthorize("hasAnyRole('USER')")
	@GetMapping("/valid")
	public String validationPanier(Model model, @AuthenticationPrincipal UtilisateurSpring utilisateurSpring,
			HttpSession session) {
		Commande commande = new Commande(utilisateurSpring.getUtilisateur().getClient());
		commande.setDate(LocalDate.now());
		Map<Produit, Integer> panier = (Map<Produit, Integer>) session.getAttribute("panier");
		List<LigneCommande> lignes = new ArrayList<LigneCommande>();
		panier.keySet().stream().forEach(produit -> {
			lignes.add(new LigneCommande(new LigneCommandeKey(produit, commande), panier.get(produit)));
		});
		commande.setLignesCommandes(lignes);
		try {
			commandeService.save(commande);
		} catch (Exception e) {
			e.printStackTrace();
		}
		session.removeAttribute("panier");
		return "redirect:/client/history?id=" + utilisateurSpring.getUtilisateur().getClient().getId();
	}

	@PostMapping("/select")
	public String selectionClient(@ModelAttribute Client client, HttpSession session) {
		Commande commande = new Commande(client);
		commande.setDate(LocalDate.now());
		Map<Produit, Integer> panier = (Map<Produit, Integer>) session.getAttribute("panier");
		List<LigneCommande> lignes = new ArrayList<LigneCommande>();
		panier.keySet().stream().forEach(produit -> {
			lignes.add(new LigneCommande(new LigneCommandeKey(produit, commande), panier.get(produit)));
		});
		commande.setLignesCommandes(lignes);
		try {
			commandeService.save(commande);
		} catch (Exception e) {
			e.printStackTrace();
		}
		session.removeAttribute("panier");
		return "redirect:/client/list";
	}

	@GetMapping("/panier")
	public String selectionProduit(HttpSession session, Model model) {
		if (session.getAttribute("panier") == null) {
			session.setAttribute("panier", new HashMap<Produit, Integer>());
		}
		model.addAttribute("produits", produitService.getAll());
		model.addAttribute("lc", new LigneCommande());
		return "commande/panier";
	}

	@PostMapping("/add")
	public String addPanier(@ModelAttribute LigneCommande lc, HttpSession session) {
		Map<Produit, Integer> panier = (Map<Produit, Integer>) session.getAttribute("panier");
		if (panier.containsKey(lc.getKey().getProduit())) {
			panier.put(lc.getKey().getProduit(), panier.get(lc.getKey().getProduit()) + lc.getQuantite());
		} else {
			try {
				panier.put(produitService.getById(lc.getKey().getProduit().getId()), lc.getQuantite());
			} catch (ProduitException e) {
				e.printStackTrace();
			}
		}
		return "redirect:/commande/panier";
	}

	@GetMapping("/show")
	public String showPanier() {
		return "commande/consultation";
	}

	@GetMapping("/remove")
	public String removeItem(@ModelAttribute Produit produit, HttpSession session) {
		Map<Produit, Integer> panier = (Map<Produit, Integer>) session.getAttribute("panier");
		panier.remove(produit);
		return "redirect:/commande/show";
	}

	@GetMapping("/cancel")
	public String annulerPanier(HttpSession session) {
		session.removeAttribute("panier");
		return "redirect:/";
	}
}
