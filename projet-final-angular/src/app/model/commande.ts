import { Client } from './client';
import { LigneCommande } from './ligne-commande';

export class Commande {
  constructor(
    private _idCommande: number | any = null,
    private _commande: LigneCommande[],
    private _client: Client,
    private _date: Date = new Date()
  ) {}

  /**
   * Getter commande
   * @return {LigneCommande[] }
   */
  public get commande(): LigneCommande[] {
    return this._commande;
  }

  /**
   * Getter idCommande
   * @return {number }
   */
  public get idCommande(): number {
    return this._idCommande;
  }

  /**
   * Getter client
   * @return {Client }
   */
  public get client(): Client {
    return this._client;
  }

  /**
   * Getter date
   * @return {Date }
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Setter commande
   * @param {LigneCommande[] } value
   */
  public set commande(value: LigneCommande[]) {
    this._commande = value;
  }

  /**
   * Setter idCommande
   * @param {number } value
   */
  public set idCommande(value: number) {
    this._idCommande = value;
  }

  /**
   * Setter client
   * @param {Client } value
   */
  public set client(value: Client) {
    this._client = value;
  }

  /**
   * Setter date
   * @param {Date } value
   */
  public set date(value: Date) {
    this._date = value;
  }
}
