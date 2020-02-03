import { Component, OnInit, Directive, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    template: ''
})
export class AbstractFormComponent {
    @Input() clearOnSubmit = true;
    @Output() formOutput = new EventEmitter();
    submitted = false;
    public componentForm: FormGroup;

    constructor() { }

    submit(form: FormGroup) {
        this.submitted = true;
        if (form.valid || true) {
            this.componentForm.reset();
            return this.process();
        }
        return this.formOutput.emit(false);
    }

    process() {
        this.formOutput.emit(this.componentForm);
    }
}
