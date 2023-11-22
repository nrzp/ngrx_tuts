import { customIncrement } from './../state/counter.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value: number;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

}
