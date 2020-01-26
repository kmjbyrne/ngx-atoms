import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-table-header',
    templateUrl: './table-header.component.html',
    styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {
    @Input() name: string;
    @Input() sortKey: string;
    @Input() sort: string;
    @Output() emitSortClick: EventEmitter<any> = new EventEmitter();

    toggled = false;

    constructor() { }

    ngOnInit() {
    }

    clickHeader(name: string) {
        this.toggled = !this.toggled;
        this.emitSortClick.emit(name);
    }

    issort() {
        return this.toggled && this.name === this.sortKey;
    }

}
