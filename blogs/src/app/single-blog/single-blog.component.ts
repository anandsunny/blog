import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Blogs } from '../shared/models/blogs.model';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {
  blogID: string;
  blog: Blogs;
  constructor(private _actRoute: ActivatedRoute,
              private _router: Router,
              private _blogService: BlogService) { }

  ngOnInit() {
    this.getBlog();
  }

  // get blog
  getBlog() {
   this._actRoute.paramMap.subscribe(data => {
      this.blogID = data.get('blogId');
    });
    this._blogService.getBlog(this.blogID).subscribe((data: any) => {
      this.blog = data.blog;
    });
  }
}
