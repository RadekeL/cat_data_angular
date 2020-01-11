import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CatDataService } from "../../../services/cat-data.service";
import { UserData } from "../../../models/UserData";

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
  constructor(private catDataService: CatDataService) {}

  ngOnInit() {}

  onSubmit(formData) {
    this.userData = { login: "radek", password: "password" };
    // console.log();
    this.conctactForm.resetForm();
    // console.log(
    this.catDataService.login(this.userData).subscribe(
      data => console.log("poszlo"),
      error => (this.error = error)
    );
    // );
  }
}

class LogIn {
  constructor(public login?: string, public password?: string) {}
}

// console.log(formData.value);
