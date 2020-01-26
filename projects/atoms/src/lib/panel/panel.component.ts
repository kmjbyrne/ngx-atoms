import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'ngx-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    @Input() title: string;
    @Input() collapse = false;
    constructor() { }

    ngOnInit() {
    }

    toggle() {
        this.collapse = !this.collapse;
    }

}
