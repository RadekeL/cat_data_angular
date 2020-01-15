import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FavoriteCat } from "src/app/models/FavoriteCat";

@Component({
  selector: "app-favorite-cat-card",
  templateUrl: "./favorite-cat-card.component.html",
  styleUrls: ["./favorite-cat-card.component.scss"]
})
export class FavoriteCatCardComponent implements OnInit {
  @Input()
  favoriteList: FavoriteCat[];
  @Input()
  cat: FavoriteCat;

  @Output()
  eventUnlikeCat = new EventEmitter<FavoriteCat>();
  constructor() {}

  ngOnInit() {}

  select(cat: FavoriteCat): void {
    this.eventUnlikeCat.emit(cat);
  }
}
