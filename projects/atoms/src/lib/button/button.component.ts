import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() display = '';
    constructor() { }

    ngOnInit() {
    }

}
