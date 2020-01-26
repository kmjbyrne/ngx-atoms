import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AtomsModule } from 'atoms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // CommonModule,
        HttpClientModule,
        AtomsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
