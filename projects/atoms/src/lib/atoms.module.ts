import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { DirectivesModule } from './directives/directives.module';
import { FormsModule } from '@angular/forms';
import { AtomPanelModule } from './panel/atom-panel.module';
import { TodoListModule } from './todo-list/todo-list.module';
import { AtomLoadingSpinnerModule } from './loading-spinner/loading-spinner.module';
import { AtomsFormsElementModule } from './form-element/form.module';
import { AbstractFormComponent } from './core/form-base/form-base.component';
import { AtomButtonModule } from './button/button.module';
import { CardsModule } from './cards/cards.module';
import { AtomDatatableModule } from './datatable/datatable.module';


@NgModule({
    declarations: [AbstractFormComponent],
    providers: [],
    imports: [
        AtomButtonModule,
        CardsModule,
        AtomDatatableModule,
        HeaderModule,
        DirectivesModule,
        FormsModule,
        AtomPanelModule,
        TodoListModule,
        AtomLoadingSpinnerModule,
        AtomsFormsElementModule,
    ],
    exports: [
        AtomButtonModule,
        CardsModule,
        AtomDatatableModule,
        HeaderModule,
        DirectivesModule,
        FormsModule,
        AtomPanelModule,
        TodoListModule,
        AtomLoadingSpinnerModule,
        AtomsFormsElementModule,
    ]
})
export class AtomsModule { }
