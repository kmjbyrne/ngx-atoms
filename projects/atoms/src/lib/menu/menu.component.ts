import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class AtomMenuComponent implements OnInit {
    @Input() config = [];
    @Input() isToggled = true;
    @Output() linkEvent = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.config = [
            {
                label: 'test',
                route: 'test'
            },
            {
                label: 'test',
                route: 'test'
            },
            {
                label: 'test',
                route: 'test'
            },
            {
                label: 'test',
                route: 'test'
            }
        ];
        this.setLinkEventListeners();
    }

    toggle() {
        this.isToggled = !this.isToggled;
    }

    clearToggle(elem) {
        elem.classList.remove('navbar--expand');
    }

    toggleCallback(elem) {
        elem.classList.toggle('navbar--expand');
    }

    setLinkEventListeners() {
        const elements = [].slice.call(document.getElementsByClassName('navbar__parentlink'));
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', () => {
                // elements.filter(item => item != elements[i]).map(item => this.clearToggle(item));
                this.toggleCallback(elements[i]);
            });
        }
    }

    getRoute(link: string, child = false): string {
        return child ? `${link}/${child}` : `${link}`;
    }

    clickEvent(link) {
        console.log(link);
    }

}
