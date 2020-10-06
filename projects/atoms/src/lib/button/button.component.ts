import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    private ACCEPTED_TYPES = ['warning', 'normal', 'info', 'success', 'red'];

    @Input() display = '';
    @Input() theme = 'normal';
    @Input() size = '';
    @Input() width = false;

    constructor() {}

    ngOnInit() {
        if (!this.ACCEPTED_TYPES.includes(this.theme)) {
            throw Error('Type must be one of accepted types');
        }
    }

    setClass() {
        let classNames = `app-button-theme-${this.theme}`;
        if (this.size === 'sm') {
            classNames = `${classNames} app-button--sm`;
        }
        if (this.width) {
            classNames = `${classNames} app-button--fw`;
        }
        return classNames;
    }
}
