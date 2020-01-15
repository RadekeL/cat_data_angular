import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { FavoriteCat } from "src/app/models/FavoriteCat";
import { CatImage } from "src/app/models/CatImage";

@Component({
  selector: "app-explore-cats",
  templateUrl: "./explore-cats.component.html",
  styleUrls: ["./explore-cats.component.scss"]
})
export class ExploreCatsComponent implements OnInit {
  randomCard: CatImage;
  favCardData: FavoriteCat;

  constructor(private catDataService: CatDataService) {}

  ngOnInit(): void {
    this.nextCat();
  }
  nextCat(): void {
    this.catDataService.getRandomImage().subscribe(
      cards => {
        if (cards.length === 1) {
          cards.forEach(card => (this.randomCard = card));
        }
      },
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
  }

  addToFavorite(): void {
    this.favCardData = {
      image_id: this.randomCard.id,
      sub_id: `user`
    };

    this.catDataService.postFavorite(this.favCardData).subscribe(
      value => value,
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
    this.nextCat();
  }
}
