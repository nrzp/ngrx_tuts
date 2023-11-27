import { addPost } from './../state/posts.actions';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/modal/post.modal';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(private store: Store<AppState>) {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      desc: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  ngOnInit(): void {

  }

  submit() {
    if (this.postForm.invalid) {
      return;
    }
    const post: Post = {
      title: this.postForm.value.title,
      desc: this.postForm.value.desc
    }
    this.store.dispatch(addPost({ post }))
  }

  showTitleErrors() {
    const title = this.postForm.get('title');
    if (title.touched && title.invalid) {
      if (title.errors?.['required']) {
        return "Title is Required";
      }
      if (title.errors?.['minlength']) {
        return "Minimum 6 characters required";
      }
    }
  }

  showDesciptionErrors() {
    const desc = this.postForm.get('desc');
    if (desc.touched && desc.invalid) {
      if (desc.errors?.['required']) {
        return "Title is Required";
      }
      if (desc.errors?.['minlength']) {
        return "Minimum 10 characters required";
      }
    }
  }

}
