import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    declarations: [FormsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        FormsComponent,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AtomsFormsElementModule { }
