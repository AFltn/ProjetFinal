package sopraAjc.projetFinal.entities;

public enum Paiement {
    CB("Carte Bleue"), Paypal("Paypal"), Crypto("Crypto");

    private String Mode;
    
    private Paiement(String Mode) {
	this.Mode=Mode;
    }
    
    public String getMode() {
	return Mode;
    }
}
