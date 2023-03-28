import { Component } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  post!: any;
  similarPost : Array<any> = []

  constructor( private route : ActivatedRoute, private firestore:Firestore, private postService : PostsService ){
    this.route.params.subscribe(async val =>{
      this.postService.countViews(val['id']);
      //load the post
      const docRef = doc(this.firestore, "Post", val['id'])
      const docSnap = await getDoc(docRef);
      this.post = docSnap.data();
      console.log(this.post)
      //load other posts of same category
      this.postService.loadCategoryPosts(val[' id']);
      this.similarPost = this.postService.categoryPosts;
    })
  }


}
