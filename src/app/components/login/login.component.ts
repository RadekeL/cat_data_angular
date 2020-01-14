import { Component, OnInit, Input } from "@angular/core";
import { CatDataService } from "../../services/cat-data.service";
import { CatImage } from "../../models/CatImage";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
