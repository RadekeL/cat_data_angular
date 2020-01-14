import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { Router } from "@angular/router";
import { FavoriteCat } from "src/app/models/FavoriteCat";

@Component({
  selector: "app-favorite-cats",
  templateUrl: "./favorite-cats.component.html",
  styleUrls: ["./favorite-cats.component.scss"]
})
export class FavoriteCatsComponent implements OnInit {
  favoriteList: FavoriteCat[];
  constructor(private router: Router, private catDataService: CatDataService) {}

  ngOnInit(): void {
    this.catDataService.getFavorites().subscribe(favoriteCats => {
      // ! Change type and use belowe method
      this.favoriteList = favoriteCats.map(data => ({
        id: data.id,
        url: data.image.url,
        sub_id: data.sub_id
      }));
      // this.favoriteList = favoriteCats;
    });
  }
  // ! handler Error NEeded
  unFavorite(dislikedCat: FavoriteCat): void {
    this.catDataService.deleteFavorites(dislikedCat.id).subscribe();
    this.favoriteList = this.favoriteList.filter(
      cat => cat.id !== dislikedCat.id
    );
  }
}
