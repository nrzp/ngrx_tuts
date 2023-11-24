import { AppState } from './../../store/app.state';
import { Observable } from 'rxjs';
import { getChannelName } from './../state/counter.selector';
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
  // channelName: string;
  channelName$ : Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe(channelName=>{
    //   console.log('Inside channelName subscribe')
    //   this.channelName = channelName
    // })

    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({count: +this.value}))
  }

  onChangeChannel(){
    this.store.dispatch(changeChannelName());
  }

}
