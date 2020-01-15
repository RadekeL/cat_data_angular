import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CatImage } from "../models/CatImage";
import { PostMessage } from "../models/PostMessage";
import { FavoriteCat } from "../models/FavoriteCat";

@Injectable({
  providedIn: "root"
})
export class CatDataService {
  apiUrl: string = "https://api.thecatapi.com/v1";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
    })
  };
  constructor(private httpClient: HttpClient) {}
  public getCatImage(title: string): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `${this.apiUrl}/images/search?breed_id=${title}`,

      this.httpOptions
    );
  }
  public getRandomImage(): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `${this.apiUrl}/images/search`,

      this.httpOptions
    );
  }
  public getBreedsName(): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `${this.apiUrl}/breeds`,
      this.httpOptions
    );
  }

  public postFavorite(data): Observable<PostMessage[]> {
    return this.httpClient.post<PostMessage[]>(
      `${this.apiUrl}/favourites`,
      data,
      this.httpOptions
    );
  }

  public getFavorites(): Observable<FavoriteCat[]> {
    return this.httpClient.get<FavoriteCat[]>(
      `${this.apiUrl}/favourites`,
      this.httpOptions
    );
  }

  public deleteFavorites(id): Observable<CatImage[]> {
    return this.httpClient.delete<CatImage[]>(
      `${this.apiUrl}/favourites/${id}`,
      this.httpOptions
    );
  }
}
