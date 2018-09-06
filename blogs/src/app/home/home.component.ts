import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from '../shared/models/blogs.model';
import { BlogService } from './../shared/services/blog.service';
import { DragScrollComponent } from 'ngx-drag-scroll'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  blogs: Blogs[] = [];
  threeBlogs: Blogs[] = [];
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('paginate') paginate;

  constructor(private _router: Router,
          private _blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }
  ngAfterViewInit() {
    // console.log(this.paginate)
  }
  getBlogs() {
    this._blogService.getBlogs().subscribe((docs:any) => {
      if(docs.success) {
        this.blogs = docs.blogs;
        if(docs.count > 3) {
          for(let i=0; i <= docs.count; i++ ) {
            if(i >= 3)  break;
            this.threeBlogs.push(docs.blogs[i]);
          }
        } else {
          this.threeBlogs = docs.blogs;
        }
        
        console.log(this.threeBlogs)
      }
    });
  }

  // jump on single-blog component
  reachSingleBlog(id){
    // console.log(id);
    return this._router.navigate(['single-blog', id]);
  }

  moveLeft() {
    this.ds.moveLeft();
  }
 
  moveRight() {
    this.ds.moveRight();
  }





}
