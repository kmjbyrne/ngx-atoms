import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'atom-panel',
    templateUrl: './atom-panel.component.html',
    styleUrls: ['./atom-panel.component.scss'],
})
export class AtomPanelComponent implements OnInit {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() image: string;
    @Input() toggle = false;
    @Input() collapse = false;

    public isToggled = false;

    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here
        this.matchHeight(this.elem.nativeElement, this.elem);
    }

    constructor(private elem: ElementRef) {}

    matchHeight(element, height) {}

    ngOnInit() {
        if (this.collapse) {
            this.toggle = true;
            this.togglePanel();
            return;
        } else {
            this.isToggled = false;
        }
    }

    togglePanel() {
        this.isToggled = !this.isToggled;
    }

    eventHandler(event: any) {
        this.isToggled = event;
    }
}
