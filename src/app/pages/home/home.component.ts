import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  postFeaturedArray : Array<object> = []
  postLatestArray : Array<object> = []

  constructor( private postService : PostsService, private firestore:Firestore ){
    this.postService.featuredPosts();
    this.postFeaturedArray = this.postService.postFeaturedArray;

    this.postService.latestPosts();
    this.postLatestArray = this.postService.postLatestArray;
  }  

}
