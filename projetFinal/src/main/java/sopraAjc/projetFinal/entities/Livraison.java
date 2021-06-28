package sopraAjc.projetFinal.entities;

public enum Livraison {
	
	
	Standard(4.9),Express(9.9),H24(14.9), PointRelais(2.9);
	
	private double prix;
	
	private Livraison(double prix)
	{
		this.prix = prix;
	}

	public double getPrix() {
		return prix;
	}

	public void setPrix(double prix) {
		this.prix = prix;
	}
	
	public String toString() 
	{
		return this.name()+"("+prix+" Euros)";
	}

}
