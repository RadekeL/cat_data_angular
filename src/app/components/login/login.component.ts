import { Component, OnInit, Input } from "@angular/core";
import { CatDataService } from "../../services/cat-data.service";
import { CatImage } from "../../models/CatImage";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  catLists: CatImage[];
  constructor(private catDataService: CatDataService) {}

  ngOnInit() {
    // * fetch data from API
    // this.catDataService.getNews().subscribe(catLists => {
    //   console.log(catLists);
    //   this.catLists = catLists;
    //   console.log(this.catLists);
    // });
    // console.log(this.catDataService.login("this.catLists"));
  }
}
