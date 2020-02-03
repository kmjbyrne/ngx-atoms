import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'atom-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
    @Input() link: any;
    @Output() clickEvent = new EventEmitter();

    showGroup = false;

    constructor() { }

    ngOnInit() {
    }

    toggleGroup() {
        this.showGroup = !this.showGroup;
    }

    propagateEvent(event) {
        this.clickEvent.emit(event);
    }

}
