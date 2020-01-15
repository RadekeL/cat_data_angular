import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatBreedsComponent } from "./components/cat-breeds/cat-breeds.component";
import { CatDataEditorComponent } from "./components/cat-data-editor/cat-data-editor.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatBreedCardComponent } from "./components/cat-breed-card/cat-breed-card.component";
import { ExploreCatsComponent } from "./components/explore-cats/explore-cats.component";
import { FavoriteCatsComponent } from "./components/favorite-cats/favorite-cats.component";
import { FavoriteCatCardComponent } from "./components/favorite-cat-card/favorite-cat-card.component";

@NgModule({
  declarations: [
    AppComponent,
    CatBreedsComponent,
    CatDataEditorComponent,
    PageNotFoundComponent,
    LoginComponent,
    CatBreedCardComponent,
    ExploreCatsComponent,
    FavoriteCatsComponent,
    FavoriteCatCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
