import { decrement, reset } from './../state/counter.actions';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {

  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  // constructor(private store: Store<{ counter: { counter: number } }>) { }
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
  }

  onIncrement() {
    // this.increment.emit()
    this.store.dispatch(increment())
  }
  onDecerement() {
    // this.decrement.emit()
    this.store.dispatch(decrement())
  }
  onReset() {
    // this.reset.emit()
    this.store.dispatch(reset())
  }

}
