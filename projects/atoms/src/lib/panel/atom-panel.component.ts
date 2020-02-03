import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-panel',
    templateUrl: './atom-panel.component.html',
    styleUrls: ['./atom-panel.component.scss']
})
export class AtomPanelComponent implements OnInit {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() image: string;
    @Input() toggle = false;

    public isToggled = false;

    constructor() {
    }

    ngOnInit() {
        this.isToggled = false;
    }

    togglePanel() {
        this.isToggled = !this.isToggled;
    }

    eventHandler(event: any) {
        this.isToggled = event;
    }

}
