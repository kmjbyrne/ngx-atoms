import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'atom-form-element',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormsComponent implements OnInit {
    @Input() parent: FormGroup;
    @Input() control: string;
    @Input() type = 'text';
    @Input() default: string = undefined;
    @Input() submitted = false;
    @Input() readonly = false;

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
    }

    inputLabelDetect(val) {
        if (this.parent.get(this.control).value !== '') {
            return true;
        }
        return false;
    }

    onSubmit() {}
}
