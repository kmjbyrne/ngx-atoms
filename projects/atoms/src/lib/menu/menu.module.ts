import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomMenuComponent } from './menu.component';

@NgModule({
    declarations: [AtomMenuComponent],
    imports: [
        CommonModule
    ],
    exports: [
        AtomMenuComponent
    ]
})
export class MenuModule { }
