import { Component , OnInit } from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {Router, RouterModule} from "@angular/router";
// le component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit   {
  title="App";
  categories ;
  currentCategory;
  
  // notre objectif c'est de recupperer les donnes mn wb service Rest , et de les stocker f catalogue
  constructor( private catalogueService : CatalogueService, private router: Router) {
  }

  ngOnInit() : void {
    this.getCategories();
  }
  private getCategories(){
        this.catalogueService.getResource("/categories").subscribe(data=> {

          this.categories = data;
        }, error => {
             console.log(error);

        })
  }
  getProductsByCat(c) {
    this.currentCategory= c;
    this.router.navigateByUrl('/products/2/' +c.id);
  }
  onSelectedProducts() {
    this.currentCategory= undefined ;
    this.router.navigateByUrl('/products/1/0');
  }
}