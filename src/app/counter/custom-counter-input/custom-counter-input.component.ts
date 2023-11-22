import { customIncrement, changeChannelName } from './../state/counter.actions';
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
  channelName: string;
  constructor(private store: Store<{counter: counterState}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data=>{
      console.log('Inside channelName subscribe')
      this.channelName = data.channelName
    })
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onChangeChannel(){
    this.store.dispatch(changeChannelName());
  }

}
