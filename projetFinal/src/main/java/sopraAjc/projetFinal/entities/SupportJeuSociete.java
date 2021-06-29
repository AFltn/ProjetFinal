package sopraAjc.projetFinal.entities;

public enum SupportJeuSociete {
	cartes("cartes"), plateau("plateau"), des("des");
	
	

    private String support;
    
    
	private SupportJeuSociete() {
		
	}
    
    private SupportJeuSociete(String support) {
	this.support=support;
    }
    
    public String getSupport() {
	return support;
    }
}
