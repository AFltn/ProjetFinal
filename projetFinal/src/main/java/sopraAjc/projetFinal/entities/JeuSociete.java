package sopraAjc.projetFinal.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.views.Views;



@Entity
@Table(name = "JeuSociete")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public class JeuSociete extends Produit{

	@JsonView(Views.Common.class)
	@Column(name = "genre", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@OneToMany(mappedBy="jeuSociete")
	private List <TypeJeuSociete> genre;
	
	@JsonView(Views.Common.class)
	@Column(name = "duree", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	private String duree;
	
	@JsonView(Views.Common.class)
	@Column(name = "support", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@OneToMany(mappedBy="jeuSociete")
	private List <SupportJeuSociete> support;


	public JeuSociete(List<TypeJeuSociete> genre, String duree, List<SupportJeuSociete> support) {
		super();
		this.genre = genre;
		this.duree = duree;
		this.support = support;
	}
	
	public List<TypeJeuSociete> getGenre() {
		return genre;
	}
	public void setGenre(List<TypeJeuSociete> genre) {
		this.genre = genre;
	}
	public String getDuree() {
		return duree;
	}
	public void setDuree(String duree) {
		this.duree = duree;
	}
	public List<SupportJeuSociete> getSupport() {
		return support;
	}
	public void setSupport(List<SupportJeuSociete> support) {
		this.support = support;
	}




}
