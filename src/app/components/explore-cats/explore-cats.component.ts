import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-explore-cats",
  templateUrl: "./explore-cats.component.html",
  styleUrls: ["./explore-cats.component.scss"]
})
export class ExploreCatsComponent implements OnInit {
  id;
  sub;
  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router // private _productService: ProductServie
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params["id"];
      // let products=this._productService.getProducts();
      // this.product=products.find(p => p.productID==this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
