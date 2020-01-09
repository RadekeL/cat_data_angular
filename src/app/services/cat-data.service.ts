import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CatLists } from "../models/CatLists";

@Injectable({
  providedIn: "root"
})
export class CatDataService {
  // API_KEY = "MY_API-KEY";
  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<CatLists[]> {
    return this.httpClient.get<CatLists[]>(
      `https://api.thecatapi.com/v1/images/search`
    );
  }
}
