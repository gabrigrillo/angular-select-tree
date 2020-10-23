export class Category{

  constructor(
    public Id: number,
    public Nome: string,
    public IdPArent: number,
    public SubCat: Category[]
  ) {  }
}
