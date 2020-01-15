import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatBreedsComponent } from "./components/cat-breeds/cat-breeds.component";
import { CatDataEditorComponent } from "./components/cat-data-editor/cat-data-editor.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ExploreCatsComponent } from "./components/explore-cats/explore-cats.component";
import { FavoriteCatsComponent } from "./components/favorite-cats/favorite-cats.component";
import { AuthGuardsService } from "./services/auth-guards.service";
import { LoginComponent } from "./components/login/login.component";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "search",
    component: CatBreedsComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: "edit",
    component: CatDataEditorComponent,
    canActivate: [AuthGuardsService],
    children: [
      {
        path: "explore",
        component: ExploreCatsComponent
      },
      {
        path: "favorite",
        component: FavoriteCatsComponent
      },
      { path: "", redirectTo: "explore", pathMatch: "full" }
    ]
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
