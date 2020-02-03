import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableSearchComponent } from './table-search/table-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DatatableComponent, TableHeaderComponent, TableSearchComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DatatableComponent
    ]
})
export class AtomDatatableModule { }
