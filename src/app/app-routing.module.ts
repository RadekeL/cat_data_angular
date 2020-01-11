import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CatSearchComponent } from "./components/cat-search/cat-search.component";
import { CatDataEditorComponent } from "./components/cat-data-editor/cat-data-editor.component";

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "search",
    component: CatSearchComponent
  },
  {
    path: "edit",
    component: CatDataEditorComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
