import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtomFormsComponent } from 'projects/atoms/src/public-api';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit, AfterViewInit {
    options = [
        {
            id: 1,
            value: 'Option A',
        },
        {
            id: 2,
            value: 'Option B',
        },
        {
            id: 3,
            value: 'Option C',
        },
    ];

    form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.email]),
        dropdown: new FormControl(this.options[1], [Validators.required]),
        single: new FormControl('', [Validators.required]),
        checkbox: new FormControl('', [Validators.required]),
    });

    nonObjectOptions = ['Y', 'N'];

    @ViewChildren(AtomFormsComponent) FormComponent: QueryList<AtomFormsComponent>;

    constructor(private cdref: ChangeDetectorRef) {}

    ngOnInit(): void {
        // this.options[2]);
        console.log(this.form.controls.dropdown.value);
    }

    ngAfterViewInit() {
        this.form.controls.dropdown.setValue({ id: 3 });
        // this.FormComponent.forEach((e) => console.log(e)); //  e.update());
        this.cdref.detectChanges();
    }

    submit() {
        console.log(this.form.value);
    }
}
