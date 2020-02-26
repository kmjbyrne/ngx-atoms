import { Directive, HostBinding, Input, ElementRef, AfterViewInit, DoCheck, OnChanges } from '@angular/core';

@Directive({
    selector: '[atomCollapse]'
})
export class CollapseDirective implements AfterViewInit, DoCheck {
    @HostBinding('class.collapsing') public isCollapsing: boolean;
    @HostBinding('style.height') public height: string;

    @Input()
    private set atomCollapse(value: boolean) {
        this.check(value);
    }

    @Input() minHeight: number;
    private lastState = false;
    private initHeight: number;

    constructor(public el: ElementRef) {}

    ngDoCheck() {
        this.measureHeight();
    }

    ngAfterViewInit() {
        this.measureHeight();
    }

    check(value: boolean) {
        this.measureHeight();
        if (value !== undefined) {
            if (value) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    measureHeight() {
        const elem = this.el.nativeElement;
        // lets be sure the element has display:block style
        elem.className = elem.className.replace('collapse', '');
        this.initHeight = elem.scrollHeight;
        return this.initHeight;
    }

    hide() {
        this.lastState = false;
        this.height = this.initHeight + 'px';
        setTimeout(() => {
            this.height = '0px';
            this.isCollapsing = true; // apply 'collapsing' class
        }, 1);
    }

    show() {
        this.lastState = true;
        this.height = '0px';
        setTimeout(() => {
            this.height = this.initHeight + 'px';
            this.isCollapsing = true; // apply 'collapsing' class
        }, 10);
    }
}
