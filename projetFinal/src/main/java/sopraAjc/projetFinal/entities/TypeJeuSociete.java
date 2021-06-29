package sopraAjc.projetFinal.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import sopraAjc.projetFinal.entities.views.Views;


@Entity
@Table(name = "TypeJeuSociete")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public enum TypeJeuSociete {
	Adresse("adresse"), Memoire("memoire"), Connaissance("connaissance"), Lettres("lettres")
	, Ambiance("ambiance"), Enquete("enquete"), Cooperation("cooperation"), Gestion("gestion"), DeckBuilding("gestion"), Bluff("bluff"), Reflexion("reflexion");
	
	
	
	@JsonView(Views.Common.class)
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqProduit")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "id_jeusociete", foreignKey = @ForeignKey(name = "type_id_jeusociete_fk"))
	private JeuSociete jeuSociete;
	
    private String type;
    
    private TypeJeuSociete(String type) {
	this.type=type;
    }
    
    public String getType() {
	return type;
    }
}


