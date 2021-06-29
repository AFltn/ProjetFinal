package sopraAjc.projetFinal.entities;

public enum TypeJeuSociete {
	Adresse("adresse"), Memoire("memoire"), Connaissance("connaissance"), Lettres("lettres")
	, Ambiance("ambiance"), Enquete("enquete"), Cooperation("cooperation"), Gestion("gestion"), DeckBuilding("gestion"), Bluff("bluff"), Reflexion("reflexion");
	
	

	
    private String type;
    
	private TypeJeuSociete() {
		
	}

    
    private TypeJeuSociete(String type) {
	this.type=type;
    }
    
    public String getType() {
	return type;
    }
}


