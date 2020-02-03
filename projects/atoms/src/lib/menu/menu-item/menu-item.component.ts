import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'atom-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
    @Input() link: any;
    @Output() clickEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    click() {
        this.clickEvent.emit(this.link);
    }

}
