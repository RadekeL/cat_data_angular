import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserData } from "../models/UserData";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:4200/",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
    })
  };
  constructor(private httpClient: HttpClient) {}

  // ! implement CheckAuth()
  //
  //

  // ! NEED A TYPESCIRIPT
  // login(email: string, password: string) {}
  public changeAuthState() {
    this.user = !this.user;
  }
  public login(user): Observable<UserData[]> {
    return this.httpClient.post<UserData[]>(
      `https://api.thecatapi.com/v1/votes`,
      user,
      this.httpOptions
    );
  }
}
