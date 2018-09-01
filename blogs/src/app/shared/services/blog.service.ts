import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BlogService {

  constructor(private _httpClient: HttpClient) { }

  getBlogs() {
    return this._httpClient.get('http://localhost:3000/blogs');
  }

  // get blog
  getBlog(blogId){
    return this._httpClient.get("http://localhost:3000/blogs/" + blogId );
  }
}
