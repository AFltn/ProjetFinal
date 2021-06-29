package sopraAjc.projetFinal.entities;

public enum TypeJeuVideo {


	RPG("RPG"),FPS("FPS"),AVENTURE("AVENTURE"),ACTION("ACTION"),
	SPORT("SPORT"),PLATEFORME("PLATEFORME"),COMBAT("COMBAT"),SIMULATION("SIMULATION"),
	COURSE("COURSE"),GESTION("GESTION");
	



	private String type;
	
	private TypeJeuVideo() {
		
	}

	private TypeJeuVideo(String type) {
		this.type=type;
	}

	public String getPlaterforme() {
		return type;
	}
}



