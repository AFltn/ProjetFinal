package sopraAjc.projetFinal.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import sopraAjc.projetFinal.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
	Optional<Utilisateur> findByLogin(String login);
}
