import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { FavoriteCat } from "src/app/models/FavoriteCat";
import { CatImage } from "src/app/models/CatImage";

@Component({
  selector: "app-explore-cats",
  templateUrl: "./explore-cats.component.html",
  styleUrls: ["./explore-cats.component.scss"]
})

// ! OBSLUGA BLEDOW  W KAZDYM SUBSCRIBE
export class ExploreCatsComponent implements OnInit {
  randomCard: CatImage;
  favCardData: FavoriteCat;

  constructor(private catDataService: CatDataService) {}

  // ! Error handler In next inside if statements
  ngOnInit(): void {
    this.nextCat();
  }
  nextCat(): void {
    this.catDataService.getRandomImage().subscribe(cards => {
      if (cards.length === 1) {
        cards.forEach(card => (this.randomCard = card));
      }
    });
  }

  addToFavorite(): void {
    this.favCardData = {
      image_id: this.randomCard.id,
      sub_id: `user`
    };

    this.catDataService.postFavorite(this.favCardData).subscribe();
    this.nextCat();

    // * SHOW SUCCESS INORMATION
    // *SHOW ERROR INFORMATION
  }
}
