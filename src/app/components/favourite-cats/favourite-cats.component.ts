import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { FavCatList } from "src/app/models/FavCatList";

@Component({
  selector: "app-favourite-cats",
  templateUrl: "./favourite-cats.component.html",
  styleUrls: ["./favourite-cats.component.scss"]
})
export class FavouriteCatsComponent implements OnInit {
  favouriteList: any;
  constructor(private catDataService: CatDataService) {}

  ngOnInit() {
    this.catDataService.getFavourites().subscribe(favCat => {
      this.favouriteList = favCat.map(data => ({
        id: data.id,
        url: data.image.url,
        sub_id: data.sub_id
      }));
    });
  }
  // ! handler Error NEeded
  unFavourite(id) {
    console.log(id);
    this.catDataService
      .deleteFavourites(id)
      .subscribe(value => console.log(value));
    // ! pipe for async endering page
  }
}
