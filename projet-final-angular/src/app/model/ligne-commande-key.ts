import { Commande } from './commande';
import { JeuxSociete } from './jeux-societe';
import { JeuxVideo } from './jeux-video';
export class LigneCommandeKey {
  constructor(
    private _jeuxVideo: JeuxVideo = new JeuxVideo(),
    private _jeuxSociete: JeuxSociete = new JeuxSociete(),
    private _commande: Commande = new Commande(null, undefined, undefined, [])
  ) {}

  /**
   * Getter jeuxVideo
   * @return {JeuxVideo }
   */
  public get jeuxVideo(): JeuxVideo {
    return this._jeuxVideo;
  }

  /**
   * Getter jeuxSociete
   * @return {JeuxSociete }
   */
  public get jeuxSociete(): JeuxSociete {
    return this._jeuxSociete;
  }

  /**
   * Getter commande
   * @return {Commande }
   */
  public get commande(): Commande {
    return this._commande;
  }

  /**
   * Setter jeuxVideo
   * @param {JeuxVideo } value
   */
  public set jeuxVideo(value: JeuxVideo) {
    this._jeuxVideo = value;
  }

  /**
   * Setter jeuxSociete
   * @param {JeuxSociete } value
   */
  public set jeuxSociete(value: JeuxSociete) {
    this._jeuxSociete = value;
  }

  /**
   * Setter commande
   * @param {Commande } value
   */
  public set commande(value: Commande) {
    this._commande = value;
  }
}
