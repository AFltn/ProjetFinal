package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopraAjc.projetFinal.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
	Optional<Utilisateur> findByLogin(String login);
	
	@Query("select c from Utilisateur c left join fetch c.avis where c.id=:id")
	Optional<Utilisateur> findByIdWithAvis(@Param("id") Integer id);
	
	@Query("select distinct c from Utilisateur c left join fetch c.avis")
	List<Utilisateur> findAllWithAvis();
	
	
}
