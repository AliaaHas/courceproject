export class recipe
{
  public name:string;
  public description:string;
  public imagepath:string;
  constructor(name:string,descr:string,img:string){
    this.name=name;
    this.imagepath=img;
    this.description=descr;
  }
}
