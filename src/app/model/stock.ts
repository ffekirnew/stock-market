import { Person } from "./person";

export class Stock {
  favorite: boolean = false;
  notablePerson: Person[];

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string
  ) {
    this.notablePerson = [];
  }

  isPositiveChange(): boolean {
    return this.price >= this.previousPrice;
  }
}
