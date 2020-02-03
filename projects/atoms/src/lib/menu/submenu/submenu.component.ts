import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'atom-submenu',
    templateUrl: './submenu.component.html',
    styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
    @Input() show = false;
    @Input() group: any;
    @Output() clickEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    click(event: any) {
        this.clickEvent.emit(event);
    }

}
