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
@Table(name = "JeuVideo")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public class JeuVideo extends Produit{

	@JsonView(Views.Common.class)
	@Column(name = "genre", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@OneToMany(mappedBy="jeuVideo")
	private List<TypeJeuVideo> genre;


	@JsonView(Views.Common.class)
	@Column(name = "support", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@OneToMany(mappedBy="jeuVideo")
	private List<PlateformeJeuVideo> support;


	public JeuVideo() {

	}

	public JeuVideo(List<TypeJeuVideo> genre, List<PlateformeJeuVideo> support) {
		this.genre = genre;
		this.support = support;
	}

	public List<TypeJeuVideo> getGenre() {
		return genre;
	}

	public void setGenre(List<TypeJeuVideo> genre) {
		this.genre = genre;
	}

	public List<PlateformeJeuVideo> getSupport() {
		return support;
	}

	public void setSupport(List<PlateformeJeuVideo> support) {
		this.support = support;
	}





}
