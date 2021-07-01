import { Client } from './client';
import { Role } from './../enum/role';
export class Utilisateur {
  private _role: Role = Role.ROLE_USER;
  private _id: number | any = null;
  private _client: Client | any = null;

  constructor(private _login: string = '', private _password: string = '') {}

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter login
   * @return {string }
   */
  public get login(): string {
    return this._login;
  }

  /**
   * Getter password
   * @return {string }
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Getter role
   * @return {Role }
   */
  public get role(): Role {
    return this._role;
  }

  /**
   * Getter client
   * @return {Client }
   */
  public get client(): Client {
    return this._client;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter login
   * @param {string } value
   */
  public set login(value: string) {
    this._login = value;
  }

  /**
   * Setter password
   * @param {string } value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Setter role
   * @param {Role } value
   */
  public set role(value: Role) {
    this._role = value;
  }

  /**
   * Setter client
   * @param {Client } value
   */
  public set client(value: Client) {
    this._client = value;
  }
}
