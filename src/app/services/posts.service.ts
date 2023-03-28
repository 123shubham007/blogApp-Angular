import { Injectable } from '@angular/core';
import { collection, doc, Firestore, getDocs, limit, orderBy, query, updateDoc, where } from '@angular/fire/firestore';
import { increment } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postFeaturedArray : Array<object> = []
  postLatestArray : Array<object> = []
  categoryPosts : Array<object> = []

  constructor( private firestore:Firestore ) { }

  async featuredPosts(){
    const q = query(collection(this.firestore, "Post"), where("isFeatured", "==", true), limit(4));
    const querySnapshot = await getDocs(q);
    this.postFeaturedArray.length = 0
    querySnapshot.forEach((doc) => {
      this.postFeaturedArray.push( [doc.id, doc.data()] );
    });
    return this.postFeaturedArray
  }

  async latestPosts(){
    const q = query(collection(this.firestore, "Post"), orderBy('createdAt'));
    const querySnapshot = await getDocs(q);
    this.postLatestArray.length = 0
    querySnapshot.forEach((doc) => {
      this.postLatestArray.push( [doc.id, doc.data()] );
    });
  }

  async loadCategoryPosts( categoryId : string ){
    const q = query(collection(this.firestore, "Post"), where("category.categoryId", "==", categoryId), limit(4));
    const querySnapshot = await getDocs(q);
    this.categoryPosts.length = 0
    querySnapshot.forEach((doc) => {
      this.categoryPosts.push( [doc.id, doc.data()] );
    });
  }

  countViews( id : any ){
    const docInstance = doc(this.firestore, 'Post', id);
    updateDoc( docInstance, {views: increment(1)} );
  }

}
