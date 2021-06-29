package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopraAjc.projetFinal.entities.JeuVideo;

public interface JeuVideoRepositry extends JpaRepository<JeuVideo, Integer> {
	List<JeuVideo> findByNom(String nom);

	List<JeuVideo> findByNomLike(String nom);

	List<JeuVideo> findByNomContaining(String nom);

	List<JeuVideo> findByNomContainingAndPrixLessThan(String no, double prix);



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

	@Query("select p from JeuVideo p left join fetch p.lignesCommandes where p.id=:id")
	Optional<JeuVideo> findByIdWithLigneCommande(@Param("id") Integer id);

	@Query("select distinct p from JeuVideo p left join fetch p.avis")
	List<JeuVideo> findAllWithAvis();
	
	@Query("select p from JeuVideo p left join fetch p.avis where p.id=:id")
	Optional<JeuVideo> findByIdWithAvis(@Param("id") Integer id); 

	
}
