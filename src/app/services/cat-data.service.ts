import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CatLists } from "../models/CatLists";
import { UserData } from "../models/UserData";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CatDataService {
  // API_KEY = "MY_API-KEY";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:4200/",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
    })
  };
  constructor(private httpClient: HttpClient) {}

  public getNews(): Observable<CatLists[]> {
    return this.httpClient.get<CatLists[]>(
      "https://api.thecatapi.com/v1/images/search",
      this.httpOptions
    );
  }

  public login(userData): Observable<UserData[]> {
    console.log(userData);
    // debugger;
    return this.httpClient.post<UserData[]>(
      `https://api.thecatapi.com/v1/votes`,
      userData,
      this.httpOptions
    );
  }
}

// public getNews(): Observable<CatLists[]> {
//   return this.httpClient.get<CatLists[]>(
//     "https://api.thecatapi.com/v1/images/search",
//     this.httpOptions
//   );
// }
