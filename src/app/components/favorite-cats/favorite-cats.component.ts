import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { FavoriteCat } from "src/app/models/FavoriteCat";

@Component({
  selector: "app-favorite-cats",
  templateUrl: "./favorite-cats.component.html",
  styleUrls: ["./favorite-cats.component.scss"]
})
export class FavoriteCatsComponent implements OnInit {
  favoriteList: FavoriteCat[];
  constructor(private catDataService: CatDataService) {}

  ngOnInit(): void {
    this.catDataService.getFavorites().subscribe(
      favoriteCats => {
        this.favoriteList = favoriteCats.map(data => ({
          id: data.id,
          url: data.image.url,
          sub_id: data.sub_id
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

  unFavorite(dislikedCat: FavoriteCat): void {
    this.catDataService.deleteFavorites(dislikedCat.id).subscribe(
      value => value,
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
    this.favoriteList = this.favoriteList.filter(
      cat => cat.id !== dislikedCat.id
    );
  }
}
