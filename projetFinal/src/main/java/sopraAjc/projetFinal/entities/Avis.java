package sopraAjc.projetFinal.entities;

public class Avis 
{
	private int Note;
	private String commentaire;
	private Utilisateur utilisateur;
	private Produit produit;
	
	
	
	public int getNote() {
		return Note;
	}
	public void setNote(int note) {
		Note = note;
	}
	public String getCommentaire() {
		return commentaire;
	}
	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	public Produit getProduit() {
		return produit;
	}
	public void setProduit(Produit produit) {
		this.produit = produit;
	}
	
}
