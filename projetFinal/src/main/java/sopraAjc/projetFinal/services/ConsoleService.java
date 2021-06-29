package sopraAjc.projetFinal.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import sopraAjc.projetFinal.entities.Role;
import sopraAjc.projetFinal.entities.Utilisateur;
import sopraAjc.projetFinal.repositories.UtilisateurRepository;

@Service
public class ConsoleService implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(ConsoleService.class);

	@Autowired
	private UtilisateurRepository utilisateurRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public void run(String... args) throws Exception {

		logger.trace("Trace");
		logger.debug("Debug");
		logger.info("Info");
		logger.warn("Warn");
		logger.error("Error");

		
		
//		try {
//			String s = null;
//			s.charAt(0);
//		} catch (NullPointerException e) {
//			logger.info(e.getMessage(), e);
//		}
		// initUtilisateur();
	}

	private void initUtilisateur() {
		Utilisateur admin = new Utilisateur();
		admin.setLogin("admin");
		admin.setPassword(passwordEncoder.encode("admin123"));
		admin.setRole(Role.ROLE_ADMIN);
		utilisateurRepo.save(admin);
		Utilisateur user = new Utilisateur();
		user.setLogin("user");
		user.setPassword(passwordEncoder.encode("user123"));
		user.setRole(Role.ROLE_USER);
		utilisateurRepo.save(user);

	}

}
