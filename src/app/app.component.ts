import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit, OnDestroy,
                                      AfterContentChecked, AfterContentInit,
                                      AfterViewChecked, AfterViewInit,
                                      DoCheck, OnChanges {
  title = 'stock-market';
  public stocks: Stock[] = [];
  private counter: number = 1;
  
  onToggleFavorite(stock: Stock): void {
    stock.favorite = !stock.favorite;
  }

  changeStockPrice(index: number) {
    this.stocks[index].price += 10;
  }

  onCreateStock(stock: Stock) {
    this.stocks.push(stock);
  }

  ngOnInit(): void {
    console.log("App Component - On Init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("App Component - On Changes");
  }

  ngDoCheck(): void {
    console.log("App Component - Do Check");
  }

  ngAfterContentChecked(): void {
    console.log("App Component - After Content Checked");
  }

  ngAfterContentInit(): void {
    console.log("App Component - After Content Init");
  }

  ngAfterViewInit(): void {
    console.log("App Component - View Init");
  }

  ngAfterViewChecked(): void {
    console.log("App Component - View Checked");
  }

  ngOnDestroy(): void {
    console.log("App Component - On Destroy");
  }

}
