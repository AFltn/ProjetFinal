package sopraAjc.projetFinal.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.views.Views;

@Entity
@Table(name = "Client")
//@DiscriminatorValue("CL")
@SequenceGenerator(name = "seqPersonne", sequenceName = "seq_person", initialValue = 100, allocationSize = 1)
public class Client {
	
	
	@JsonView(Views.ClientWithCommande.class)
	@OneToMany(mappedBy = "client")
	private List<Commande> commandes;
		
	
	@JsonView(Views.Common.class)
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqPersonne")
	private Integer id;
	
	
	@OneToOne
	@JoinColumn(name = "user_id")
	@Valid
	@JsonView(Views.Common.class)
	private Utilisateur utilisateur;
	
	@Column(name = "prenom", length = 150)
	@Size(min = 2, max = 150)
	@JsonView(Views.Common.class)
	private String prenom;
	
	
	@JsonView(Views.Common.class)
	@Column(name = "nom", length = 150)
	@Size(min = 2, max = 150)
	private String nom;

	@JsonView(Views.Common.class)
	@Column(name = "date_de_Naissance")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dateNaissance;
		
	@JsonView(Views.Common.class)
	@Valid
	@Embedded // renseigne
	private Adresse adresse;


	
	
	
	public Client() {

	}



	public List<Commande> getCommandes() {
		return commandes;
	}

	public void setCommandes(List<Commande> commandes) {
		this.commandes = commandes;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

}
