import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CatSearchComponent } from "./components/cat-search/cat-search.component";
import { CatDataEditorComponent } from "./components/cat-data-editor/cat-data-editor.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ExploreCatsComponent } from "./components/explore-cats/explore-cats.component";
import { FavouriteCatsComponent } from "./components/favourite-cats/favourite-cats.component";
import { AuthGuardsService } from "./services/auth-guards.service";

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
    component: CatSearchComponent,
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
        path: "favourite",
        component: FavouriteCatsComponent
      },
      { path: "", redirectTo: "explore", pathMatch: "full" }
    ]
  },

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
