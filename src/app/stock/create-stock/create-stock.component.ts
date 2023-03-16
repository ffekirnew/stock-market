import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { Stock } from "src/app/model/stock";
import { ReactiveFormsModule } from "@angular/forms";
import { StockService } from "src/app/services/stock.service";

@Component({
  selector: "app-create-stock",
  templateUrl: "./create-stock.component.html",
  styleUrls: ["./create-stock.component.css"],
})
export class CreateStockComponent {
  public stock: any;
  public confirmed: Boolean = false;
  public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  public stockForm: FormGroup;
  public message: any;

  constructor(
    private fb: FormBuilder,
    private stockService: StockService,
    ) {
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      exchangePlace: [null, Validators.required],
      notablePeople: this.fb.array([]),
    });
  }

  onSubmit(): boolean {
    if (this.stockForm.valid) {
      this.stock = new Stock('', '', 0, 0, '');
      this.stock.name = this.stockForm.value.name;
      this.stock.code = this.stockForm.value.code;
      this.stock.price = this.stockForm.value.price;
      this.stock.previousPrice = this.stockForm.value.price;
      this.stock.exchange = this.stockForm.value.exchangePlace;

      console.log(this.stock);
      const newStockCreated = this.stockService.createStock(this.stock);
      console.log(this.stockService.getStocks())
      if ( newStockCreated ) {
        return true;
      } else {
        this.message = "Stock Already Exists";
      }
    }

    return false;
  }

  get notablePeople(): FormArray {
    return this.stockForm.get("notablePeople") as FormArray;
  }

  addNotablePerson() {
    this.notablePeople.push(
      this.fb.group({
        name: ["", Validators.required],
        title: ["", Validators.required],
      })
    );
  }

  removeNotablePerson(index: number) {
    this.notablePeople.removeAt(index);
  }

  resetForm() {
    this.stockForm.reset();
  }
}
