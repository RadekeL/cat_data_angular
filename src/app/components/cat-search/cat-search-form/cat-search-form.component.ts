import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CatDataService } from "../../../services/cat-data.service";
import { CatImage } from "../../../models/CatImage";
import { CatBreed } from "../../../models/CatBreed";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-cat-search-form",
  templateUrl: "./cat-search-form.component.html",
  styleUrls: ["./cat-search-form.component.scss"]
})
export class CatSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  selectTitle = ["Breeds:"];
  catDataOutput: CatImage[];
  breedList: CatBreed[];
  error: string;
  constructor(private catDataService: CatDataService) {}
  ngOnInit() {
    this.searchForm = new FormGroup({
      breeds: new FormControl()
    });

    // ! Handle Error needed
    this.catDataService.getBreedsName().subscribe(breedList => {
      this.breedList = breedList.map(value => ({
        name: value.name,
        id: value.id
      }));
    });
  }
  onChange() {
    this.catDataService
      .getNews(this.searchForm.value.breeds)
      .subscribe(catLists => {
        console.log(catLists);
        this.catDataOutput = catLists;
        console.log(this.catDataOutput);
      });
  }
}
