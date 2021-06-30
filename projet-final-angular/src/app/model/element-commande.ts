import { Client } from 'src/app/model/client';
import { JeuxVideo } from 'src/app/model/jeux-video';
export class ElementCommande {
  constructor(
    private _produit: JeuxVideo,
    private _quantite: number = 0,
    private _date: Date = new Date(),
    private _client: Client
  ) {}
  /**
   * Getter client
   * @return {Client }
   */
  public get client(): Client {
    return this._client;
  }

  /**
   * Setter client
   * @param {Client } value
   */
  public set client(value: Client) {
    this._client = value;
  }

  /**
   * Getter date
   * @return {Date }
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Setter date
   * @param {Date } value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Getter quantite
   * @return {number }
   */
  public get quantite(): number {
    return this._quantite;
  }

  /**
   * Getter quantite
   * @return {JeuxVideo }
   */
  public get produit(): JeuxVideo {
    return this._produit;
  }

  /**
   * Setter quantite
   * @param {number } value
   */
  public set quantite(value: number) {
    this._quantite = value;
  }

  /**
   * Setter quantite
   * @param {JeuxVideo} value
   */
  public set produit(value: JeuxVideo) {
    this._produit = value;
  }
}
