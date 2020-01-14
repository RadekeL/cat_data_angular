import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CatDataService } from "../../../services/cat-data.service";
import { CatImage } from "../../../models/CatImage";
import { CatBreed } from "../../../models/CatBreed";
@Component({
  selector: "app-cat-search-form",
  templateUrl: "./cat-search-form.component.html",
  styleUrls: ["./cat-search-form.component.scss"]
})
export class CatSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  catDescription: CatImage[];
  breedsList: CatBreed[];
  error: string;
  constructor(private catDataService: CatDataService) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      breeds: new FormControl("Breeds:")
    });
    // ! Handle Error needed
    this.catDataService.getBreedsName().subscribe(breeds => {
      this.breedsList = breeds.map(value => ({
        name: value.name,
        id: value.id
      }));
    });
  }
  changeBreed(): void {
    this.catDataService
      .getCatImage(this.searchForm.value.breeds)
      .subscribe(catLists => {
        this.catDescription = catLists;
      });
  }
}
