import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomPanelComponent } from './atom-panel.component';
import { DirectivesModule } from '../directives/directives.module';
import { PanelHeaderComponent } from './panel-header/panel-header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        AtomPanelComponent,
        PanelHeaderComponent,
    ],
    imports: [
        CommonModule,
        DirectivesModule,
        FontAwesomeModule
    ],
    exports: [
        AtomPanelComponent
    ]
})
export class AtomPanelModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faAngleDown);
        console.log(library);
    }
}
