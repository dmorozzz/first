import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public getPosts: Observable<object> = this.postService.getAllPosts();

  constructor(private postService: PostService) {     
  }

 

  ngOnInit(): void {
  }

}
