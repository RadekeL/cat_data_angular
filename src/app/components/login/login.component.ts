import { Component, OnInit, Input } from "@angular/core";
import { CatDataService } from "../../services/cat-data.service";
import { CatLists } from "../../models/CatLists";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  catLists: CatLists[];
  constructor(private catDataService: CatDataService) {}

  ngOnInit() {
    this.catDataService.getNews().subscribe(catLists => {
      console.log(catLists);
      this.catLists = catLists;
      console.log(this.catLists);
    });

    // console.log(this.catDataService.login("this.catLists"));
  }
}
