package sopraAjc.projetFinal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sopraAjc.projetFinal.entities.Avis;
import sopraAjc.projetFinal.entities.Client;
import sopraAjc.projetFinal.entities.Utilisateur;
import sopraAjc.projetFinal.exceptions.AvisException;
import sopraAjc.projetFinal.repositories.AvisRepository;
import sopraAjc.projetFinal.repositories.ClientRepository;
import sopraAjc.projetFinal.repositories.UtilisateurRepository;

@Service
public class AvisService {
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private CommandeService commandeService;
	@Autowired
	private AvisRepository avisRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;


	public Avis save(Avis avis) throws AvisException {
		if (avis.getNote() < 0) {
			throw new AvisException("Note obligatoire");
		}
		if (avis.getUtilisateur() == null) {
			throw new AvisException("pas d'utilisateur pour cet avis");
		}
		if (avis.getCommentaire() == null || avis.getCommentaire().isEmpty()) {
			throw new AvisException("Commentaire obligatoire");
		}

		return avisRepository.save(avis);
	}

	public void delete(Avis avis) {
		if (avis != null) {
			avisRepository.delete(avis);
		}
	}

//	public void delete(Integer id) {
//		if (id != null) {
//			Optional<Client> opt = clientRepository.findById(id);
//			if (opt.isPresent()) {
//				delete(opt.get());
//			}
//		}
//	}

	public List<Avis> getAll() {
		return avisRepository.findAll();
	}

	public List<Utilisateur> getAllAvis() {
		
			return utilisateurRepository.findAllWithAvis();
	}
	
	
	
//	public Utilisateur getAvisByIdUser(Integer id) {
//				if (id != null) {
//			Optional<Utilisateur> opt = utilisateurRepository.findByIdWithAvis(id);
//						if (opt.isPresent()) {
//				return opt.get();
//			}
//		}
//		return new Utilisateur();
//	}
//
//	public Client getById(Integer id) {
//				if (id != null) {
//			Optional<Client> opt = clientRepository.findById(id);
//			if (opt.isPresent()) {
//				return opt.get();
//			}
//		}
//		return new Client();
//
//	}
//
//	public Client getByIdWithCommandes(Integer id) {
//		if (id != null) {
//			Optional<Client> opt = clientRepository.findByIdWithCommandes(id);
//			if (opt.isPresent()) {
//				return opt.get();
//			}
//		}
//		return new Client();
//	}

}
