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

@Component({
  selector: "app-create-stock",
  templateUrl: "./create-stock.component.html",
  styleUrls: ["./create-stock.component.css"],
})
export class CreateStockComponent {
  public stock: any;
  @Output() public createStock: EventEmitter<Stock>;
  public confirmed: Boolean = false;
  public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  public stockForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createStock = new EventEmitter<Stock>();
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      exchangePlace: [null, Validators.required],
      notablePeople: this.fb.array([]),
    });
  }

  onSubmit() {
    if (this.stockForm.valid) {
      this.stock = {
        name: this.stockForm.value.name,
        code: this.stockForm.value.code,
        price: this.stockForm.value.price,
        previousPrice: this.stockForm.value.price,
        exchange: this.stockForm.value.exchangePlace,
        notablePeople: this.fb.array([]),
      };
      console.log(this.stock);
      this.createStock.emit(this.stock);
    }
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
