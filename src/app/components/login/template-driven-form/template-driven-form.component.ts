import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.scss"]
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild("loginForm", { static: true }) loginForm: NgForm;
  error: string;
  login = new User();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  // ! ERROR HANDLER NEEDED!s

  onSubmit() {
    this.authService.login(this.login).subscribe(data => {
      alert("Welcome on the page.");
      alert(this.authService.user);

      this.authService.changeAuthState();
      alert(this.authService.user);

      this.router.navigateByUrl("/search"), error => (this.error = error);
    });
    this.loginForm.resetForm();
  }
}

// ! MODEL?
class User {
  constructor(public image_id?: string, public value?: number) {}
}
