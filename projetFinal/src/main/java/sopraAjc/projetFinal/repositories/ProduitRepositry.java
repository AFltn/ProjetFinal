package sopraAjc.projetFinal.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import sopraAjc.projetFinal.entities.Commande;
import sopraAjc.projetFinal.entities.Produit;

public interface ProduitRepositry extends JpaRepository<Produit, Integer> {
	List<Produit> findByNom(String nom);

	List<Produit> findByNomLike(String nom);

	List<Produit> findByNomContaining(String nom);

	List<Produit> findByNomContainingAndPrixLessThan(String no, double prix);



//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update Produit p set p.prix=p.prix*(1.0-:pourcentage)")
//	int setPrixSolde(@Param("pourcentage") double pourcentage);

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("delete from Produit p where p.fournisseur is null")
//	int deleteProduitSansFournisseur();

//	@Modifying
//	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
//	@Query("update Produit p set p.fournisseur=null where p.fournisseur=:fournisseur")
//	int setFournisseurNull(@Param("fournisseur") Fournisseur fournisseur);

	@Query("select p from Produit p left join fetch p.lignesCommandes where p.id=:id")
	Optional<Produit> findByIdWithLigneCommande(@Param("id") Integer id);

	@Query("select distinct p from Produit p left join fetch p.avis")
	List<Produit> findAllWithAvis();
	
	@Query("select p from Produit p left join fetch p.avis where p.id=:id")
	Optional<Produit> findByIdWithAvis(@Param("id") Integer id);

	
}
