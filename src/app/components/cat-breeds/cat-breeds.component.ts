import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CatDataService } from "../../services/cat-data.service";
import { CatImage } from "../../models/CatImage";
import { CatBreed } from "../../models/CatBreed";
@Component({
  selector: "app-cat-breeds",
  templateUrl: "./cat-breeds.component.html",
  styleUrls: ["./cat-breeds.component.scss"]
})
export class CatBreedsComponent implements OnInit {
  searchForm: FormGroup;
  catDescription: CatImage[];
  breedsList: CatBreed[];
  error: string;
  constructor(private catDataService: CatDataService) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      breeds: new FormControl("Breeds:")
    });
    this.catDataService.getBreedsName().subscribe(
      breeds => {
        this.breedsList = breeds.map(value => ({
          name: value.name,
          id: value.id
        }));
      },
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
  }
  changeBreed(): void {
    this.catDataService.getCatImage(this.searchForm.value.breeds).subscribe(
      catLists => {
        this.catDescription = catLists;
      },
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
  }
}
