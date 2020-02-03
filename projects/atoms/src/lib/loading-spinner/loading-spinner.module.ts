import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomLoadingSpinnerComponent } from './loading-spinner.component';



@NgModule({
    declarations: [AtomLoadingSpinnerComponent],
    imports: [
        CommonModule
    ],
    exports: [
        AtomLoadingSpinnerComponent
    ]
})
export class AtomLoadingSpinnerModule { }
