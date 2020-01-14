import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { FavCatList } from "src/app/models/FavCatList";
import { Router } from "@angular/router";

@Component({
  selector: "app-favourite-cats",
  templateUrl: "./favourite-cats.component.html",
  styleUrls: ["./favourite-cats.component.scss"]
})
export class FavouriteCatsComponent implements OnInit {
  favouriteList: any;
  constructor(private router: Router, private catDataService: CatDataService) {}

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
  unFavourite(dislikedCat) {
    this.catDataService.deleteFavourites(dislikedCat.id).subscribe();
    this.favouriteList = this.favouriteList.filter(
      cat => cat.id !== dislikedCat.id
    );
  }
}
