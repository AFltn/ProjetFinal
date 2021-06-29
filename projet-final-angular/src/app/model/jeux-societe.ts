import { SupportJeuxSociete } from './../enum/support-jeux-societe';
import { TypeJeuxSociete } from './../enum/type-jeux-societe';
import { EditAvisComponent } from './../component/edit-avis/edit-avis.component';
export class JeuxSociete {
  constructor(
    private _id: number = 0,
    private _nom: string = '',
    private _editeur: string = '',
    private _prix: number = 0,
    private _datesortie: Date = new Date(),
    private _ageMin: number = 0,
    private _description: string = '',
    private _nbJoueursMin: number = 0,
    private _nbJoueursMax: number = 0,
    private _noteMoyenne: number = 0,
    private _avis: EditAvisComponent[],
    private _genre: TypeJeuxSociete[],
    private _duree: string = '',
    private _support: SupportJeuxSociete[]
  ) {}

  /**
   * Getter id
   * @return {number }
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter nom
   * @return {string }
   */
  public get nom(): string {
    return this._nom;
  }

  /**
   * Getter editeur
   * @return {string }
   */
  public get editeur(): string {
    return this._editeur;
  }

  /**
   * Getter prix
   * @return {number }
   */
  public get prix(): number {
    return this._prix;
  }

  /**
   * Getter datesortie
   * @return {Date }
   */
  public get datesortie(): Date {
    return this._datesortie;
  }

  /**
   * Getter ageMin
   * @return {number }
   */
  public get ageMin(): number {
    return this._ageMin;
  }

  /**
   * Getter description
   * @return {string }
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Getter nbJoueursMin
   * @return {number }
   */
  public get nbJoueursMin(): number {
    return this._nbJoueursMin;
  }

  /**
   * Getter nbJoueursMax
   * @return {number }
   */
  public get nbJoueursMax(): number {
    return this._nbJoueursMax;
  }

  /**
   * Getter noteMoyenne
   * @return {number }
   */
  public get noteMoyenne(): number {
    return this._noteMoyenne;
  }

  /**
   * Getter duree
   * @return {string }
   */
  public get duree(): string {
    return this._duree;
  }

  /**
   * Setter id
   * @param {number } value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter nom
   * @param {string } value
   */
  public set nom(value: string) {
    this._nom = value;
  }

  /**
   * Setter editeur
   * @param {string } value
   */
  public set editeur(value: string) {
    this._editeur = value;
  }

  /**
   * Setter prix
   * @param {number } value
   */
  public set prix(value: number) {
    this._prix = value;
  }

  /**
   * Setter datesortie
   * @param {Date } value
   */
  public set datesortie(value: Date) {
    this._datesortie = value;
  }

  /**
   * Setter ageMin
   * @param {number } value
   */
  public set ageMin(value: number) {
    this._ageMin = value;
  }

  /**
   * Setter description
   * @param {string } value
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * Setter nbJoueursMin
   * @param {number } value
   */
  public set nbJoueursMin(value: number) {
    this._nbJoueursMin = value;
  }

  /**
   * Setter nbJoueursMax
   * @param {number } value
   */
  public set nbJoueursMax(value: number) {
    this._nbJoueursMax = value;
  }

  /**
   * Setter noteMoyenne
   * @param {number } value
   */
  public set noteMoyenne(value: number) {
    this._noteMoyenne = value;
  }

  /**
   * Setter duree
   * @param {string } value
   */
  public set duree(value: string) {
    this._duree = value;
  }
}
