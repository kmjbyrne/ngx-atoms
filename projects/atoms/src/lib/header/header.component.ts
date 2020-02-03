import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() config: any;
    constructor() { }

    ngOnInit() {
        // <!-- routerLinkActive="active cyan" -->
    }

}
