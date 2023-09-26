import { Component, Input, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

// Union Type
type State = 'Save' | 'Saving...' | 'Saved'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent<T> {
  messageState: State = 'Save'
  @Input() toggle: Observable<T>;

  @HostListener('click', ['$event']) onClick(_event: Event): void {
    this.messageState = 'Saving...';
    this.toggle.subscribe((value: T) => {
        this.messageState = 'Saved';
    })
}
}7
