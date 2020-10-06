import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'atom-form-element',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class AtomFormsComponent implements OnInit, AfterViewInit {
    @Input() parent: FormGroup;
    @Input() control: string;
    @Input() formControl: FormControl;
    @Input() type = 'text';
    @Input() key: string;
    @Input() label: string;
    @Input() default: any;
    @Input() submitted = false;
    @Input() readonly = false;
    @Input() multi = false;
    @Input() options: [];
    @Input() defaultSelect: any;
    @Input() itemkey: string;
    @Input() border = true;
    @Input() icons = true;
    @Input() pick: string;

    @Input() theme: string;

    modified = false;

    @ViewChild('input') input: ElementRef;

    constructor(private cdref: ChangeDetectorRef) {}

    ngOnInit() {
        this.parent.valueChanges.subscribe((val) => {
            if (this.readonly) {
                this.modified = this.inputLabelDetect(val);
            }
        });

        if (this.defaultSelect) {
        }
    }

    ngAfterViewInit() {
        if (this.default) {
            this.parent.get(this.control).setValue(this.default);
        }
        this.cdref.detectChanges();
    }

    makeValue(item: any) {
        if (this.key) {
            return item[this.key];
        }
        return item;
    }

    compareFn(c1: any, c2: any): boolean {
        if (!c1 && c2) {
            return true;
        }
        if (!c1 || !c2) {
            return false;
        }
        if (c1.id && c2.id) {
            if (c1.id.toString() === c2.id.toString()) {
                return true;
            } else if (c1.id && !c2) {
                return true;
            }
            return false;
        } else {
            if (!c1 && c2.id) {
                return false;
            }
            // return false;
        }
        return c1 === c2;
    }

    inputLabelDetect(val) {
        if (this.parent.get(this.control).value !== '') {
            return true;
        }
        return false;
    }

    showLabelSuccess(control: string) {
        return this.parent.get(control).valid;
    }

    onSubmit() {}
}
