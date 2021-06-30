import { PlateformeJeuxVideo } from './../enum/plateforme-jeux-video';
import { TypeJeuxVideo } from './../enum/type-jeux-video';
import { EditAvisComponent } from './../component/edit-avis/edit-avis.component';
export class JeuxVideo {
  constructor(
    private _id: number = 0,
    private _nom: string = '',
    private _editeur: string = '',
    private _prix: number = 0,
    private _nbJoueursMax: number = 0,
    private _nbJoueursMin: number = 0,
    private _dateSortie: Date = new Date(),
    private _ageMin: number = 0,
    private _description: string = '',
    private _noteMoyenne: number = 0,
    private _avis: EditAvisComponent[] = [],
    private _genre: TypeJeuxVideo[] = [],
    private _support: PlateformeJeuxVideo[] = []
  ) {}

  /**
   * Getter avis
   * @return {EditAvisComponent[] }
   */
  public get avis(): EditAvisComponent[] {
    return this._avis;
  }

  /**
   * Setter avis
   * @param {EditAvisComponent[] } value
   */
  public set avis(value: EditAvisComponent[]) {
    this._avis = value;
  }

  /**
   * Getter genre
   * @return {TypeJeuxVideo[] }
   */
  public get genre(): TypeJeuxVideo[] {
    return this._genre;
  }

  /**
   * Setter genre
   * @param {TypeJeuxVideo[] } value
   */
  public set genre(value: TypeJeuxVideo[]) {
    this._genre = value;
  }

  /**
   * Getter support
   * @return {PlateformeJeuxVideo[] }
   */
  public get support(): PlateformeJeuxVideo[] {
    return this._support;
  }

  /**
   * Setter support
   * @param {PlateformeJeuxVideo[] } value
   */
  public set support(value: PlateformeJeuxVideo[]) {
    this._support = value;
  }

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
  public get dateSortie(): Date {
    return this._dateSortie;
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
   * Setter genre
   * @param {TypeJeuxVideo[] } value
   */
  public set genre(value: TypeJeuxVideo[]) {
    this._genre = value;
  }

  /**
   * Setter support
   * @param {PlateformeJeuxVideo[] } value
   */
  public set support(value: PlateformeJeuxVideo[]) {
    this._support = value;
  }

  /**
   * Setter avis
   * @param {EditAvisComponent[] } value
   */
  public set avis(value: EditAvisComponent[]) {
    this._avis = value;
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
  public set dateSortie(value: Date) {
    this._dateSortie = value;
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
}
