package sopraAjc.projetFinal.entities;

import java.util.List;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
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
	@ElementCollection(targetClass = TypeJeuVideo.class, fetch = FetchType.EAGER)
	@CollectionTable
	@Enumerated(EnumType.STRING)
	private Set<TypeJeuVideo> genre;


	@JsonView(Views.Common.class)
	@Column(name = "support", length = 100, nullable = false)
	@NotEmpty(message = "ce champ ne peut pas etre vide !")
	@ElementCollection(targetClass = PlateformeJeuVideo.class, fetch = FetchType.EAGER)
	@CollectionTable
	@Enumerated(EnumType.STRING)
	private Set<PlateformeJeuVideo> support;


	public JeuVideo() {

	}

	public JeuVideo(Set<TypeJeuVideo> genre, Set<PlateformeJeuVideo> support) {
		this.genre = genre;
		this.support = support;
	}

	public Set<TypeJeuVideo> getGenre() {
		return genre;
	}

	public void setGenre(Set<TypeJeuVideo> genre) {
		this.genre = genre;
	}

	public Set<PlateformeJeuVideo> getSupport() {
		return support;
	}

	public void setSupport(Set<PlateformeJeuVideo> support) {
		this.support = support;
	}





}
