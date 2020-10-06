import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'atom-panel-header',
    templateUrl: './panel-header.component.html',
    styleUrls: ['./panel-header.component.scss'],
})
export class PanelHeaderComponent implements OnInit {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() toggle = false;
    @Input() isToggled = false;

    @Output() clickedHeader = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    togglePanel() {
        if (this.toggle) {
            this.isToggled = !this.isToggled;
            this.clickedHeader.emit(this.isToggled);
        }
    }
}
