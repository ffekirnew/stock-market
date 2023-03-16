import { Component, OnInit } from "@angular/core";
import { Stock } from "src/app/model/stock";
import { StockService } from "src/app/services/stock.service";

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.css"],
})
export class StockListComponent implements OnInit {
  public stocks: any;

  constructor(
    private stockService: StockService
  ) {}

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
  }
}
