import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"]
})
export class TemplateDrivenFormComponent implements OnInit {
  user = new LogIn();
  constructor() {}

  ngOnInit() {}

  onSubmit(contactForm) {
    console.log(contactForm);
    console.log(this.user);
  }
}

class LogIn {
  constructor(public login?: string, public password?: string) {}
}
