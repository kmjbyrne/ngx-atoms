import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'atom-form-element',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormsComponent implements OnInit {
    @Input() form: FormGroup;
    @Input() formKey: string;
    @Input() type = 'text';
    @Input() default: string;
    @Input() submitted = false;

    constructor() { }

    ngOnInit() {
        if (this.default) {
            this.form.get(this.formKey).setValue(this.default);
        }
    }

    onSubmit() {

    }

}
