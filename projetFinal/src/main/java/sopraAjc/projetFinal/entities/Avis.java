package sopraAjc.projetFinal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.views.Views;

@Entity
@Table(name = "avis")
@SequenceGenerator(name = "seqAvis", sequenceName = "seq_avis", initialValue = 100, allocationSize = 1)
public class Avis 
{
	

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqAvis")
	private Integer id;
	
	@JsonView(Views.Common.class)
	private double note;
	@JsonView(Views.Common.class)
	private String commentaire;
	
	@ManyToOne
	@JoinColumn(name = "id_utilisateur", foreignKey = @ForeignKey(name = "avis_id_user_fk"))
	@JsonView(Views.Common.class)
	private Utilisateur utilisateur;
	
	@ManyToOne
	@JoinColumn(name = "id_produit", foreignKey = @ForeignKey(name = "avis_id_produit_fk") )
	private Produit produit;
	
	
	
	public double getNote() {
		return note;
	}
	public void setNote(int note) {
		this.note = note;
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
