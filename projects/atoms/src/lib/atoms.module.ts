import { NgModule } from '@angular/core';
import { AtomsComponent } from './atoms.component';
import { MenuModule } from './menu/menu.module';
import { CommonModule } from '@angular/common';
import { PanelModule } from './panel/panel.module';
import { LoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { DatatableModule } from './datatable/datatable.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from './button/button.module';

@NgModule({
    declarations: [AtomsComponent],
    imports: [
        CommonModule,
        MenuModule,
        PanelModule,
        FormsModule,
        LoadingSpinnerModule,
        DatatableModule,
        ButtonModule
    ],
    exports: [
        MenuModule,
        PanelModule,
        LoadingSpinnerModule,
        DatatableModule,
        ButtonModule
    ]
})
export class AtomsModule { }
