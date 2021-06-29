package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopraAjc.projetFinal.entities.Client;
import sopraAjc.projetFinal.entities.Produit;

public interface ClientRepository extends JpaRepository<Client, Integer> {
	@Query("select c from Client c left join fetch c.commandes where c.id=:id")
	Optional<Client> findByIdWithCommandes(@Param("id") Integer id);
	

}
