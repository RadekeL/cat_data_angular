import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-favourite-cats",
  templateUrl: "./favourite-cats.component.html",
  styleUrls: ["./favourite-cats.component.scss"]
})
export class FavouriteCatsComponent implements OnInit {
  id;
  sub;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router // private _productService:ProductService){
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params["id"];
      // let products = this._productService.getProducts();
      // this.product = products.find(p => p.productID == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
