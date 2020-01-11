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

  onSubmit(formData) {
    this.userData = { image_id: "radek", value: 123 };
    this.conctactForm.resetForm();
    this.catDataService.login(this.userData).subscribe(data => {
      alert("Welcome on the page.");
      this.router.navigateByUrl("/search");
    });
  }
}

class LogIn {
  constructor(public login?: string, public password?: string) {}
}

