import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.component.html',
  styleUrls: ['./editpage.component.scss']
})
export class EditpageComponent implements OnInit {
  id: string;
  textareaColumns = 1;
  submitted: boolean = false;
  wasError: boolean = false;
  editPostForm: FormGroup; 
  constructor(
    private fb: FormBuilder, 
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postService.getPostById(this.id).subscribe((post: any) => {
      this.editPostForm = this.fb.group({
        title: [post.title, Validators.required],
        text: [post.text, Validators.required],
        author: [post.author, Validators.required],
      })
    })
 
  }

  onKeyUpEvent(event) {
    let columns = Math.floor(event.target.value.length / 31)
    this.textareaColumns = columns + 1;
  }

  get form() {
    return this.editPostForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.postService.updatePostById(this.id, this.editPostForm.value).subscribe((data: any) => {
      this.router.navigate([`/post/${data._id}`])
    }, error => {
      this.wasError = true;
    });
  }

}
