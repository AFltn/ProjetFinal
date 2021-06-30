package sopraAjc.projetFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sopraAjc.projetFinal.entities.JeuSociete;
import sopraAjc.projetFinal.exceptions.JeuSocieteException;
import sopraAjc.projetFinal.repositories.JeuSocieteRepository;

@Service
public class JeuSocieteService {
	@Autowired
	private JeuSocieteRepository JeuSocieteRepository;
	@Autowired
	private CommandeService commandeService;


	public JeuSociete save(JeuSociete JeuSociete) throws JeuSocieteException{
		if (JeuSociete.getNom() == null || JeuSociete.getNom().isEmpty()) {
			throw new JeuSocieteException("données incorrectes:le nom doit etre renseigné");
		}
		if (JeuSociete.getPrix() <= 0) {
			throw new JeuSocieteException("données incorrectes:le prix doit etre superieur à 0");
		}

		return JeuSocieteRepository.save(JeuSociete);
	}

	public void delete(Integer id) {
		if (id != null) {
			Optional<JeuSociete> opt = JeuSocieteRepository.findByIdWithLigneCommande(id);
			if (opt.isPresent()) {
				JeuSociete p = opt.get();
				p.getLignesCommandes().stream().forEach(lc -> {
					commandeService.delete(lc.getKey().getCommande());
				});
				JeuSocieteRepository.deleteById(p.getId());
			}

		}
	}

	public List<JeuSociete> getAll() {
		return JeuSocieteRepository.findAllWithAvis();
	}
	


	public JeuSociete getById(Integer id) throws JeuSocieteException {
		if (id != null) {
			Optional<JeuSociete> opt = JeuSocieteRepository.findByIdWithAvis(id);
			if (opt.isPresent()) {
				return opt.get();
			}
		}
		throw new JeuSocieteException("Jeu de Société introuvable");
		// return new JeuSociete();
	}

}
