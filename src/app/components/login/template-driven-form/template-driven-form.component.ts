import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CatDataService } from "../../../services/cat-data.service";
import { UserData } from "../../../models/UserData";
import { Router } from "@angular/router";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"]
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("conctactForm", { static: true }) conctactForm: NgForm;
  userData: UserData;
  error: string;
  user = new LogIn();
  constructor(private catDataService: CatDataService, private router: Router) {}

  ngOnInit() {}

  onSubmit(abc) {
    console.log(abc);
    // this.userData = { image_id: "radek", value: 123 };
    // console.ldfdfdfog(this.user);
    // debugger;

    this.catDataService.login(this.user).subscribe(data => {
      console.log(data);
      alert("Welcome on the page.");
      this.router.navigateByUrl("/search"), error => (this.error = error);
    });
    this.conctactForm.resetForm();

    // debugger;
  }
}

class LogIn {
  constructor(public image_id?: string, public value?: number) {}
}
