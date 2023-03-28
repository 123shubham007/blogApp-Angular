import { Component } from '@angular/core';
import { Category } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent {

  categoryArray !: Array<any>;

  constructor( private categoriesService : CategoriesService ){}

  ngOnInit():void{
    this.categoriesService.loadData().subscribe((res:Category[])=>{
      this.categoryArray = res;
    });
  }

}
