import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockItemComponent implements  OnInit, OnDestroy,
                                            AfterContentChecked, AfterContentInit,
                                            AfterViewChecked, AfterViewInit,
                                            DoCheck, OnChanges {
  @Input()
  public stock: any;

  @Output()
  private toggleFavorite: any;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
  }

  onToggleFavorite(event: any) {
    console.log(event);
    this.toggleFavorite.emit(this.stock);
  }

  changeStockPrice() {
    this.stock.price += 5;
  }

  ngOnInit(): void {
    console.log("Stock Item Component - On Init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Stock Item Component - On Changes");
  }

  ngDoCheck(): void {
    console.log("Stock Item Component - Do Check");
  }

  ngAfterContentChecked(): void {
    console.log("Stock Item Component - After Content Checked");
  }

  ngAfterContentInit(): void {
    console.log("Stock Item Component - After Content Init");
  }

  ngAfterViewInit(): void {
    console.log("Stock Item Component - View Init");
  }

  ngAfterViewChecked(): void {
    console.log("Stock Item Component - View Checked");
  }

  ngOnDestroy(): void {
    console.log("Stock Item Component - On Destroy");
  }


}
