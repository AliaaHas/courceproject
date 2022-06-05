import { ingredient } from "../Shared/ingredient.model";

export class recipe
{
  public name:string;
  public description:string;
  public imagepath:string;
  public ingredients:ingredient[];
  constructor(name:string,descr:string,img:string,ingredients:ingredient[]){
    this.name=name;
    this.imagepath=img;
    this.description=descr;
    this.ingredients=ingredients;
  }
}
