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
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  @ViewChild('paginate') paginate;
  imageSources: string[] = [
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg',
    'assets/009.jpg'
  ]
  constructor(private _router: Router,
          private _blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }
  ngAfterViewInit() {
    console.log(this.paginate)
  }
  getBlogs() {
    this._blogService.getBlogs().subscribe((datas:any) => {
      datas.blogs.forEach(blog => {
        this.blogs.push(blog);
      });
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
