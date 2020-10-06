import { Output, EventEmitter, Component } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

export class AbstractFormComponent {
    @Output() submitEvent = new EventEmitter();
    @Output() errors = new EventEmitter();

    submitted = false;
    // form: FormGroup;

    public messages = new ReplaySubject();

    constructor() {}

    public form: any;

    getErrors() {
        const errors = [];
        Object.keys(this.form.controls).forEach((key) => {
            const controlErrors: ValidationErrors = this.form.get(key).errors;
            if (controlErrors != null) {
                Object.keys(controlErrors).forEach((keyError) => {
                    const msg = `${key} is required!`;
                    this.messages.next(msg);
                });
            }
        });
        this.errors.emit(errors);
    }

    onSubmit(): any {
        this.submitted = true;
        if (!this.form.valid) {
            this.getErrors();
            return false;
        }
        this.submitEvent.emit(this.form.value);
    }

    process(data: any) {
        const options = [];
        if (!data) {
            return [];
        }
        data.map((e: any) => {
            if (e) {
                options.push({ key: e.id, value: e.name || e.label });
            }
        });
        return options;
    }

    unpack() {}

    value() {
        return this.form.value;
    }

    reset() {
        this.submitted = false;
        this.form.reset();
    }

    enter() {
        this.onSubmit();
    }
}
