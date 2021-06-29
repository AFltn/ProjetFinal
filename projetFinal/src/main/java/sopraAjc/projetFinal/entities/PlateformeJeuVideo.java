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
@Table(name = "PlateformeJeuVideo")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public enum PlateformeJeuVideo {

	
	PS4("PS4"),PS5("PS5"),XBOXONE("XBOXONE"),XBOXSERIES("XBOXSERIES"),PC("PC"),
	SWITCH("Switch");
	
	@JsonView(Views.Common.class)
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqProduit")
	private Integer id;

	@ManyToOne
	@JoinColumn(name = "id_jeuvideo", foreignKey = @ForeignKey(name = "plateform_id_jeuvideo_fk"))
	private JeuVideo jeuVideo;
	
    private String platerforme;
    
    private PlateformeJeuVideo(String platerforme) {
	this.platerforme=platerforme;
    }
    
    public String getPlaterforme() {
	return platerforme;
    }
}
