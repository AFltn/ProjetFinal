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
@Table(name = "SupportJeuSociete")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public enum SupportJeuSociete {
	cartes("cartes"), plateau("plateau"), des("des");
	
	
	@JsonView(Views.Common.class)
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqProduit")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "id_jeusociete", foreignKey = @ForeignKey(name = "plateform_id_jeusociete_fk"))
	private JeuSociete jeuSociete;
	
    private String support;
    
    private SupportJeuSociete(String support) {
	this.support=support;
    }
    
    public String getSupport() {
	return support;
    }
}
