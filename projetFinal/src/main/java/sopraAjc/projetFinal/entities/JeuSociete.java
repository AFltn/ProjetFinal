package sopraAjc.projetFinal.entities;

import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.views.Views;



@Entity
@Table(name = "JeuSociete")
//@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public class JeuSociete extends Produit{

	@JsonView(Views.Common.class)
	@Column(name = "genre", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@ElementCollection(targetClass = TypeJeuSociete.class, fetch = FetchType.EAGER)
	@CollectionTable
	@Enumerated(EnumType.STRING)
	private Set <TypeJeuSociete> genre;
	
	@JsonView(Views.Common.class)
	@Column(name = "duree", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	private String duree;
	
	@JsonView(Views.Common.class)
	@Column(name = "support", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@ElementCollection(targetClass = SupportJeuSociete.class, fetch = FetchType.EAGER)
	@CollectionTable
	@Enumerated(EnumType.STRING)
	private Set <SupportJeuSociete> support;


	public JeuSociete(Set<TypeJeuSociete> genre, String duree, Set<SupportJeuSociete> support) {
	
		this.genre = genre;
		this.duree = duree;
		this.support = support;
	}
	
	public Set<TypeJeuSociete> getGenre() {
		return genre;
	}
	public void setGenre(Set<TypeJeuSociete> genre) {
		this.genre = genre;
	}
	public String getDuree() {
		return duree;
	}
	public void setDuree(String duree) {
		this.duree = duree;
	}
	public Set<SupportJeuSociete> getSupport() {
		return support;
	}
	public void setSupport(Set<SupportJeuSociete> support) {
		this.support = support;
	}




}
