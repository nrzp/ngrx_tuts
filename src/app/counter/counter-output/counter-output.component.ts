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

  // @Input() counter;
  // counter: number;

  counterSubscription = Subscription;

  counter$ : Observable<{counter: number}>
  // constructor(private store: Store<{ counter: { counter: number } }>) { }
  constructor(private store: Store<{ counter: counterState }>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // })

    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // });

    this.counter$ =  this.store.select('counter');
  }

  // ngOnDestroy() {
  //   if(this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }


}
