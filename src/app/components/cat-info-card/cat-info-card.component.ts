import { Component, OnInit, Input } from "@angular/core";
import { CatImage } from "../../models/CatImage";

@Component({
  selector: "app-cat-info-card",
  templateUrl: "./cat-info-card.component.html",
  styleUrls: ["./cat-info-card.component.scss"]
})
export class CatInfoCardComponent implements OnInit {
  @Input() catData: CatImage[];
  constructor() {}

  ngOnInit() {
    console.log(this.catData);
  }
}
