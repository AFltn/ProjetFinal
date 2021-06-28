package sopraAjc.projetFinal.entities;

import javax.persistence.ManyToOne;

public enum TypeJeuVideo {


	RPG("RPG"),FPS("FPS"),AVENTURE("AVENTURE"),ACTION("ACTION"),
	SPORT("SPORT"),PLATEFORME("PLATEFORME"),COMBAT("COMBAT"),SIMULATION("SIMULATION"),
	COURSE("COURSE"),GESTION("GESTION");
	
	@ManyToOne
	private JeuVideo jeuvideo;

	private String type;

	private TypeJeuVideo(String type) {
		this.type=type;
	}

	public String getPlaterforme() {
		return type;
	}
}



