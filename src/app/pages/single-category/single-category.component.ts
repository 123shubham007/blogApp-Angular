import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  postArray : Array<any> = []
  caregory : any

  constructor(private route : ActivatedRoute, private postService : PostsService){
    this.route.params.subscribe(val =>{
      this.caregory = val[' category'];
      this.postService.loadCategoryPosts(val[' id']);
      this.postArray = this.postService.categoryPosts;
    })
  }

}
