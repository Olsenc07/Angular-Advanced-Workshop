import {Directive, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

@Directive({
  selector: '[toggle][message]'
})
// By using specific type <T>
// can use it with different types like string, number, custom objects, or any other data type. The 
// type parameter T allows to make the directive more flexible and reusable.
export class StateDirective<T> implements OnInit {
    @Input() toggle: Observable<T>;
    @Input() message: string;
    @HostBinding('textState') messageState: string;
    @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();

    @HostListener('click', ['$event']) onClick(_event: Event): void {
        this.messageState = 'Saving...';
        this.selectedChange.emit(this.messageState);
        this.toggle.subscribe((value: T) => {
            this.messageState = 'Saved';
            this.selectedChange.emit(this.messageState);
        })
      }

      ngOnInit(): void {
       this.messageState = this.message;
      }
}