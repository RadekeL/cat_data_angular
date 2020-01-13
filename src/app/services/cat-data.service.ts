import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CatImage } from "../models/CatImage";
import { UserData } from "../models/UserData";
import { throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// RANDOM:  "https://api.thecatapi.com/v1/images/search?limit=8&page=10&order=Asc",
// FIND BREED: `https://api.thecatapi.com/v1/images/search?breed_ids=${title}`,
// FIND CATS IN CATEGORY: https://api.thecatapi.com/v1/images/search?category_ids=1

// IMAGES GIFS ETC
// For Gifs - Request a new Image with https://api.thecatapi.com/images/search?mime_types=gif

// ! OPTYMALIZE  METHODS Get to get post to post ??
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
  // ! CHANGE method NAME!!!!!
  public getNews(title: string): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `https://api.thecatapi.com/v1/images/search?breed_id=${title}`,

      this.httpOptions
    );
  }
  // !<Array<CatIamge>> ???
  public getRandomImage(): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `https://api.thecatapi.com/v1/images/search`,

      this.httpOptions
    );
  }
  public getBreedsName(): Observable<CatImage[]> {
    return this.httpClient.get<CatImage[]>(
      `https://api.thecatapi.com/v1/breeds`,
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
  // !! <UserData> ?????
  public postFavourite(data): Observable<UserData[]> {
    console.log(data);
    // debugger;
    return this.httpClient.post<UserData[]>(
      `https://api.thecatapi.com/v1/favourites`,
      data,
      this.httpOptions
    );
  }

  // public getFavourites(): Observable<CatImage[]> {
  //   return this.httpClient.get<CatImage[]>(
  //     `https://api.thecatapi.com/v1/breeds`,
  //     this.httpOptions
  //   );
  // }
}

// public getNews(): Observable<CatLists[]> {
//   return this.httpClient.get<CatLists[]>(
//     "https://api.thecatapi.com/v1/images/search",
//     this.httpOptions
//   );
// }
