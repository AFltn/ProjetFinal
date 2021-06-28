import { Client } from './client';
import { LigneCommande } from './ligne-commande';
export class Commande {
  constructor(
    private _numero: number | any = null,
    private _date: Date = new Date(),
    private _client: Client = new Client(),
    private _ligneCommandes: Array<LigneCommande>
  ) {}

  /**
   * Getter ligneCommandes
   * @return {ligneCommande }
   */
  public get ligneCommande(): Array<LigneCommande> {
    return this._ligneCommandes;
  }

  /**
   * Setter ligneCommandes
   * @param {ligneCommande } value
   */
  public set ligneCommandes(value: Array<LigneCommande>) {
    this._ligneCommandes = value;
  }

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
   * Getter numero
   * @return {number }
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Setter numero
   * @param {number } value
   */
  public set numero(value: number) {
    this._numero = value;
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
}
