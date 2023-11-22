import { getCounter } from './../state/counter.selector';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  // counter: number;
  counter$: Observable<number>
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
    //  this.store.select(getCounter).subscribe(counter=>{
    //    console.log('Inside counter subscribe')
    //    this.counter = counter
    //  });
    this.counter$ = this.store.select(getCounter)
  }

}
