import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock-market';
  public stock: any;
  private counter: number = 1;

  ngOnInit() {
    this.stock = new Stock("Test Stock Company", "TSC", 85, 90);
  }

  onToggleFavorite(stock: Stock): void {
    console.log(stock);
    stock.favorite = !stock.favorite;
  }

  changeStock() {
    this.stock = new Stock("Test Stock Company - " + this.counter++ , "TSC", 85, 80)
  }

  changeStockPrice() {
    this.stock.price += 10;
  }
}
