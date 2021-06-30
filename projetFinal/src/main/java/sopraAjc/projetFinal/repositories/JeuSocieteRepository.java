package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopraAjc.projetFinal.entities.JeuSociete;
import sopraAjc.projetFinal.entities.JeuVideo;

public interface JeuSocieteRepository extends JpaRepository<JeuSociete, Integer> {
	List<JeuSociete> findByNom(String nom);

	List<JeuSociete> findByNomLike(String nom);

	List<JeuSociete> findByNomContaining(String nom);

	List<JeuSociete> findByNomContainingAndPrixLessThan(String no, double prix);



//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update JeuSociete p set p.prix=p.prix*(1.0-:pourcentage)")
//	int setPrixSolde(@Param("pourcentage") double pourcentage);

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("delete from JeuSociete p where p.fournisseur is null")
//	int deleteJeuSocieteSansFournisseur();

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update JeuSociete p set p.fournisseur=null where p.fournisseur=:fournisseur")
//	int setFournisseurNull(@Param("fournisseur") Fournisseur fournisseur);

	@Query("select p from JeuSociete p left join fetch p.lignesCommandes where p.id=:id")
	Optional<JeuSociete> findByIdWithLigneCommande(@Param("id") Integer id);

	@Query("select distinct p from JeuSociete p left join fetch p.avis")
	List<JeuSociete> findAllWithAvis();
	
	@Query("select p from JeuSociete p left join fetch p.avis where p.id=:id")
	Optional<JeuSociete> findByIdWithAvis(@Param("id") Integer id); 

	
}
