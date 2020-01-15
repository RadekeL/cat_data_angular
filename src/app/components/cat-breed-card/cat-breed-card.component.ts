import { Component, OnInit, Input } from "@angular/core";
import { CatImage } from "../../models/CatImage";

@Component({
  selector: "app-cat-breed-card",
  templateUrl: "./cat-breed-card.component.html",
  styleUrls: ["./cat-breed-card.component.scss"]
})
export class CatBreedCardComponent implements OnInit {
  @Input() catData: CatImage[];
  constructor() {}

  ngOnInit() {}
}
