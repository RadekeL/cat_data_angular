import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './components/login/login.component';
import { CatSearchComponent } from './components/cat-search/cat-search.component';
import { CatDataEditorComponent } from './components/cat-data-editor/cat-data-editor.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CatSearchComponent, CatDataEditorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
