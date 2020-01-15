import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm", { static: true }) loginForm: NgForm;
  error: string;
  login = new User();
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    this.authService.login(this.login).subscribe(
      data => {
        this.authService.changeAuthState();
        this.router.navigateByUrl("/search"), error => (this.error = error);
      },
      err =>
        alert(
          "HTTP Error " +
            err.status +
            " Please try again later. More info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
        )
    );
    this.loginForm.resetForm();
  }
}

class User {
  constructor(public image_id?: string, public value?: number) {}
}
