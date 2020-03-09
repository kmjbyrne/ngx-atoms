import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'atom-form-element',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormsComponent implements OnInit {
    @Input() parent: FormGroup;
    @Input() control: string;
    @Input() formControl: FormControl;
    @Input() type = 'text';
    @Input() default: string = undefined;
    @Input() submitted = false;
    @Input() readonly = false;
    @Input() options: [];
    @Input() defaultSelect: any;

    modified = false;

    @ViewChild('input') input: ElementRef;

    constructor() {}

    ngOnInit() {
        if (this.default) {
            this.parent.get(this.control).setValue(this.default);
        }
        this.parent.valueChanges.subscribe(val => {
            if (this.readonly) {
                this.modified = this.inputLabelDetect(val);
            }
        });

        if (this.defaultSelect) {
            this.parent.get(this.control).setValue(this.defaultSelect);
        }
    }

    inputLabelDetect(val) {
        if (this.parent.get(this.control).value !== '') {
            return true;
        }
        return false;
    }

    onSubmit() {}
}
