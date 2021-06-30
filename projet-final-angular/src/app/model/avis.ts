import { Client } from 'src/app/model/client';
export class Avis {
  constructor(
    private _note: number = 0,
    private _commentaire: string = '',
    private _client: Client
  ) {}

  /**
   * Getter note
   * @return {number }
   */
  public get note(): number {
    return this._note;
  }

  /**
   * Getter commentaire
   * @return {string }
   */
  public get commentaire(): string {
    return this._commentaire;
  }

  /**
   * Setter note
   * @param {number } value
   */
  public set note(value: number) {
    this._note = value;
  }

  /**
   * Setter commentaire
   * @param {string } value
   */
  public set commentaire(value: string) {
    this._commentaire = value;
  }
}
