package sopraAjc.projetFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sopraAjc.projetFinal.entities.JeuVideo;
import sopraAjc.projetFinal.entities.Produit;
import sopraAjc.projetFinal.exceptions.ProduitException;
import sopraAjc.projetFinal.repositories.ProduitRepositry;

@Service
public class ProduitService {
	@Autowired
	private ProduitRepositry produitRepository;
	@Autowired
	private CommandeService commandeService;


	public Produit save(Produit produit) throws ProduitException{
		if (produit.getNom() == null || produit.getNom().isEmpty()) {
			throw new ProduitException("données incorrectes:le nom doit etre renseigné");
		}
		if (produit.getPrix() <= 0) {
			throw new ProduitException("données incorrectes:le prix doit etre superieur à 0");
		}

		return produitRepository.save(produit);
	}

	public void delete(Integer id) {
		if (id != null) {
			Optional<Produit> opt = produitRepository.findByIdWithLigneCommande(id);
			if (opt.isPresent()) {
				Produit p = opt.get();
				p.getLignesCommandes().stream().forEach(lc -> {
					commandeService.delete(lc.getKey().getCommande());
				});
				produitRepository.deleteById(p.getId());
			}

		}
	}

	public List<Produit> getAll() {
		return produitRepository.findAll();
	}
	


	public Produit getById(Integer id) throws ProduitException {
		if (id != null) {
			Optional<Produit> opt = produitRepository.findById(id);
			if (opt.isPresent()) {
				return opt.get();
			}
		}
		throw new ProduitException("produit introuvable");
		// return new Produit();
	}

}
