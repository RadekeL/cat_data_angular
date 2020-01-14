import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostMessage } from "../models/PostMessage";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
    })
  };
  constructor(private httpClient: HttpClient) {}

  public changeAuthState(): void {
    this.user = !this.user;
  }
  public login(user): Observable<PostMessage[]> {
    return this.httpClient.post<PostMessage[]>(
      `https://api.thecatapi.com/v1/votes`,
      user,
      this.httpOptions
    );
  }
}
