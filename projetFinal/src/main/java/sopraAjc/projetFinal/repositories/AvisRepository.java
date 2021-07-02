package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopraAjc.projetFinal.entities.Avis;
import sopraAjc.projetFinal.entities.Produit;
import sopraAjc.projetFinal.entities.Utilisateur;

public interface AvisRepository extends JpaRepository<Avis, Integer> {
	
	List<Avis> findByUtilisateur(Utilisateur utilisateur);

//	List<Avis> findByProduit(Produit produit);

//	List<Avis> findByNomContaining(String nom);

//	List<Avis> findByNomContainingAndPrixLessThan(String no, double prix);



//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update JeuVideo p set p.prix=p.prix*(1.0-:pourcentage)")
//	int setPrixSolde(@Param("pourcentage") double pourcentage);

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("delete from JeuVideo p where p.fournisseur is null")
//	int deleteJeuVideoSansFournisseur();

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update JeuVideo p set p.fournisseur=null where p.fournisseur=:fournisseur")
//	int setFournisseurNull(@Param("fournisseur") Fournisseur fournisseur);




	
//	@Query("select p from Avis p left join fetch p.avis where p.id=:id")
//	Optional<Avis> findByIdWithAvis(@Param("id") Integer id);

	
}
