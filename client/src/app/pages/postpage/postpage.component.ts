import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.scss']
})
export class PostpageComponent implements OnInit {
  getPost: Observable<object>;
  deleteButtonTouched: boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getPost = this.postService.getPostById(params.id);
    })
  }

  deletePost(id) {
    this.postService.deletePostById(id).subscribe(data => {
      this.router.navigate(['/']);
    })
  }

}
