import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock("Test Stock Company", "TSC", 85, 80, "NASDAQ"),
      new Stock("Second Stock Company", "SSC", 10, 20, "NSE"),
      new Stock("Last Stock Company", "LSC", 876, 765, "NYSE"),
    ]; 
  }

  getStocks() {
    return this.stocks;
  }

  createStock(stock: Stock): boolean {
    const foundStockWithSmililarName = this.stocks.find(each => each.code === stock.code);

    if (foundStockWithSmililarName)
      return false;
    this.stocks.push( stock );
    return true;
  }
}
