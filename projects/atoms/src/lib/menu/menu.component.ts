import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'atom-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class AtomMenuComponent implements OnInit {
    @Input() config = [];
    @Input() isToggled = true;
    @Output() linkEvent = new EventEmitter();

    constructor() {}

    ngOnInit() {
        this.config = [
            {
                label: 'test',
                route: 'test',
                nested: [
                    {
                        label: 'test',
                        route: 'test',
                    },
                    {
                        label: 'test',
                        route: 'test',
                    },
                ],
            },
            {
                label: 'test',
                route: 'test',
            },
            {
                label: 'test',
                route: 'test',
            },
            {
                label: 'test',
                route: 'test',
            },
        ];
    }

    toggle() {
        this.isToggled = !this.isToggled;
    }

    getRoute(link: string, child = false): string {
        return child ? `${link}/${child}` : `${link}`;
    }

    catchLink(link) {}
}
