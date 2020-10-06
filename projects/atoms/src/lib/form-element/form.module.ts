import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomFormsComponent } from './form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LabelBlockComponent } from './label-block/label-block.component';

@NgModule({
    declarations: [AtomFormsComponent, LabelBlockComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [AtomFormsComponent, FormsModule, ReactiveFormsModule],
})
export class AtomsFormsElementModule {}
