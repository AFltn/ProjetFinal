package sopraAjc.projetFinal.controller.restController;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.config.UtilisateurSpring;
import sopraAjc.projetFinal.entities.Avis;
import sopraAjc.projetFinal.entities.Produit;
import sopraAjc.projetFinal.entities.Utilisateur;
import sopraAjc.projetFinal.entities.views.Views;
import sopraAjc.projetFinal.exceptions.AvisException;
import sopraAjc.projetFinal.exceptions.ProduitException;
import sopraAjc.projetFinal.exceptions.rest.AvisInvalidException;
import sopraAjc.projetFinal.services.AvisService;
import sopraAjc.projetFinal.services.ProduitService;

@RestController
@RequestMapping("/api/editavis")
@CrossOrigin(origins = "*")
public class AvisRestController {

	@Autowired
	private AvisService avisService;
	@Autowired
	private ProduitService produitService;


	

	@PostMapping("/{id}")
	@ResponseStatus(HttpStatus.CREATED)
	@JsonView(Views.Common.class)
	public Avis create(@RequestBody @Valid Avis avis, BindingResult br,
			@AuthenticationPrincipal UtilisateurSpring utilisateurSpring, @PathVariable Integer id) throws ProduitException {
		Utilisateur utilisateur = utilisateurSpring.getUtilisateur();
		Produit produit = produitService.getById(id);
		
		if (br.hasErrors()) {
			throw new AvisInvalidException();
		}
		try {
		
			avis.setProduit(produit);
			avis.setUtilisateur(utilisateur);
			avis = avisService.save(avis);
		
		} catch (AvisException e) {
			throw new AvisInvalidException();
		}
		return avis;
	}

}
