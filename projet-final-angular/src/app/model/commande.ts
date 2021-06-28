export class Commande {
  constructor(
    private _numero: number | any = null,
    private _date: Date = new Date(),
    private _client: string = ''
  ) {}

  /**
   * Getter numero
   * @return {number }
   */
  public get numero(): number {
    return this._numero;
  }

  /**
   * Getter client
   * @return {string }
   */
  public get client(): string {
    return this._client;
  }

  /**
   * Setter numero
   * @param {number } value
   */
  public set numero(value: number) {
    this._numero = value;
  }

  /**
   * Setter client
   * @param {string } value
   */
  public set client(value: string) {
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
}
