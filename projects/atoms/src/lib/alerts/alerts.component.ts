import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    @Input() type = 'warning';
    @Input() heading: string;

    hide = false;

    private TYPES = ['warning', 'info', 'success', 'error'];

    constructor() {}

    setClass(): string {
        return 'alert--' + this.type;
    }

    hideAlert(): void {
        this.hide = true;
    }

    ngOnInit(): void {
        if (!this.TYPES.includes(this.type)) {
            const typeString = this.TYPES.join('');
            throw Error('Please provide an accepted type (' + typeString + ')');
        }
    }
}
