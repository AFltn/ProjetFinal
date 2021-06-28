package sopraAjc.projetFinal.entities;

public enum PlateformeJeuVideo {
	
	PS4("PS4"),PS5("PS5"),XBOXONE("XBOXONE"),XBOXSERIES("XBOXSERIES"),PC("PC"),
	SWITCH("Switch");

	
    private String platerforme;
    
    private PlateformeJeuVideo(String platerforme) {
	this.platerforme=platerforme;
    }
    
    public String getPlaterforme() {
	return platerforme;
    }
}
