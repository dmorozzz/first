import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../post.service';
@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.scss']
})
export class AddpageComponent implements OnInit {
  textareaColumns = 1;
  submitted: boolean = false;
  wasError: boolean = false;
  addPostForm: FormGroup; 
  constructor(
    private fb: FormBuilder, 
    private postService: PostService,
    private router: Router
    ) { }
  ngOnInit() {
    this.addPostForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      author: ['', Validators.required],
    })
  }

  onKeyUpEvent(event) {
    let columns = Math.floor(event.target.value.length / 31)
    this.textareaColumns = columns + 1;
  }

  get form() {
    return this.addPostForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.postService.createPost(this.addPostForm.value).subscribe((data: any) => {
      this.router.navigate([`/post/${data._id}`])
    }, error => {
      this.wasError = true;
    });
  }
}
