import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-cat-search-form",
  templateUrl: "./cat-search-form.component.html",
  styleUrls: ["./cat-search-form.component.scss"]
})
export class CatSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  categories: Array<string> = ["Draw", "Name", "Breed"];
  catData = new FindData();
  @ViewChild("catDataFinder", { static: true }) catDataFinder: NgForm;
  error: string;
  data = new FindData();
  constructor() {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      type: new FormControl(this.categories[0])
    });

    this.searchForm.valueChanges.subscribe(value => console.log(value));
  }
  onSubmit() {
    console.log(this.searchForm.value);
    this.catData.title = this.searchForm.value.title;
    this.catData.type = this.searchForm.value.type;
    console.log(this.catData);
  }
}

class FindData {
  constructor(public title?: string, public type?: string) {}
}
