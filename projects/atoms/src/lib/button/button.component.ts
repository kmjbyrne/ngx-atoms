import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    private ACCEPTED_TYPES = ['warning', 'normal', 'info', 'success'];

    @Input() display = '';
    @Input() theme = 'normal';

    constructor() {}

    ngOnInit() {
        if (!this.ACCEPTED_TYPES.includes(this.theme)) {
            throw Error('Type must be one of accepted types');
        }
    }

    setClass() {
        return `atom-button--${this.theme}`;
    }
}
