package entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "jeuxvideo")
public class JeuVideo extends Produit{

@OneToMany
private List<TypeJeuVideo> genre;
@OneToMany
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
