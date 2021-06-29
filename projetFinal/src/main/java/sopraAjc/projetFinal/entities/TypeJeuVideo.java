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
@Table(name = "TypeJeuVideo")
@SequenceGenerator(name = "seqProduit", sequenceName = "seq_produit", initialValue = 100, allocationSize = 1)
public enum TypeJeuVideo {


	RPG("RPG"),FPS("FPS"),AVENTURE("AVENTURE"),ACTION("ACTION"),
	SPORT("SPORT"),PLATEFORME("PLATEFORME"),COMBAT("COMBAT"),SIMULATION("SIMULATION"),
	COURSE("COURSE"),GESTION("GESTION");
	
	@JsonView(Views.Common.class)
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqProduit")
	private Integer id;
	
	@ManyToOne
	@JoinColumn(name = "id_jeuvideo", foreignKey = @ForeignKey(name = "type_id_jeuvideo_fk"))
	private JeuVideo jeuVideo;

	private String type;

	private TypeJeuVideo(String type) {
		this.type=type;
	}

	public String getPlaterforme() {
		return type;
	}
}



