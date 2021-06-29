package sopraAjc.projetFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sopraAjc.projetFinal.entities.JeuVideo;
import sopraAjc.projetFinal.exceptions.JeuVideoException;
import sopraAjc.projetFinal.repositories.JeuVideoRepositry;

@Service
public class JeuVideoService {
	@Autowired
	private JeuVideoRepositry JeuVideoRepository;
	@Autowired
	private CommandeService commandeService;


	public JeuVideo save(JeuVideo JeuVideo) throws JeuVideoException{
		if (JeuVideo.getNom() == null || JeuVideo.getNom().isEmpty()) {
			throw new JeuVideoException("données incorrectes:le nom doit etre renseigné");
		}
		if (JeuVideo.getPrix() <= 0) {
			throw new JeuVideoException("données incorrectes:le prix doit etre superieur à 0");
		}

		return JeuVideoRepository.save(JeuVideo);
	}

	public void delete(Integer id) {
		if (id != null) {
			Optional<JeuVideo> opt = JeuVideoRepository.findByIdWithLigneCommande(id);
			if (opt.isPresent()) {
				JeuVideo p = opt.get();
				p.getLignesCommandes().stream().forEach(lc -> {
					commandeService.delete(lc.getKey().getCommande());
				});
				JeuVideoRepository.deleteById(p.getId());
			}

		}
	}

	public List<JeuVideo> getAll() {
		return JeuVideoRepository.findAllWithAvis();
	}
	


	public JeuVideo getById(Integer id) throws JeuVideoException {
		if (id != null) {
			Optional<JeuVideo> opt = JeuVideoRepository.findByIdWithAvis(id);
			if (opt.isPresent()) {
				return opt.get();
			}
		}
		throw new JeuVideoException("JeuVideo introuvable");
		// return new JeuVideo();
	}

}
