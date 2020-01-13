import { Component, OnInit } from "@angular/core";
import { CatDataService } from "src/app/services/cat-data.service";
import { RandomCat } from "src/app/models/RandomCat";
import { FavouriteCat } from "src/app/models/FavouriteCat";

@Component({
  selector: "app-explore-cats",
  templateUrl: "./explore-cats.component.html",
  styleUrls: ["./explore-cats.component.scss"]
})

// ! OBSLUGA BLEDOW  W KAZDYM SUBSCRIBE
export class ExploreCatsComponent implements OnInit {
  randomCard: RandomCat; // ! ???? MAYBE CatImage is good?
  favCardData: FavouriteCat;
  private subIdCounter: number = 0;

  constructor(private catDataService: CatDataService) {}

  // ! randomCard should have another assigment way
  ngOnInit() {
    this.catDataService.getRandomImage().subscribe(cards => {
      this.randomCard = cards[0];
    });
  }
  nextCat() {
    this.catDataService.getRandomImage().subscribe(card => {
      this.randomCard = card[0];
    });
  }

  addToFavourite() {
    this.favCardData = {
      image_id: this.randomCard.id,
      sub_id: `user`
    };

    this.catDataService
      .postFavourite(this.favCardData)
      .subscribe(value => console.log(value));
    // * SHOW SUCCESS INORMATION
    // *SHOW ERROR INFORMATION
  }
  debugger;
}
