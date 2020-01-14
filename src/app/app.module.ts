import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { CatSearchComponent } from "./components/cat-search/cat-search.component";
import { CatDataEditorComponent } from "./components/cat-data-editor/cat-data-editor.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { TemplateDrivenFormComponent } from "./components/login/template-driven-form/template-driven-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatSearchFormComponent } from "./components/cat-search/cat-search-form/cat-search-form.component";
import { CatInfoCardComponent } from "./components/cat-info-card/cat-info-card.component";
import { ExploreCatsComponent } from "./components/explore-cats/explore-cats.component";
import { FavoriteCatsComponent } from "./components/favorite-cats/favorite-cats.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatSearchComponent,
    CatDataEditorComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent,
    CatSearchFormComponent,
    CatInfoCardComponent,
    ExploreCatsComponent,
    FavoriteCatsComponent
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
