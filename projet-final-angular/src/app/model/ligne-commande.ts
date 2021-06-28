export class LigneCommande {
  constructor(
    private _key: number | any = null,
    private _quantite: number = 0
  ) {}

  /**
   * Getter key
   * @return {number }
   */
  public get key(): number {
    return this._key;
  }

  /**
   * Getter quantite
   * @return {number }
   */
  public get quantite(): number {
    return this._quantite;
  }

  /**
   * Setter key
   * @param {number } value
   */
  public set key(value: number) {
    this._key = value;
  }

  /**
   * Setter quantite
   * @param {number } value
   */
  public set quantite(value: number) {
    this._quantite = value;
  }
}
