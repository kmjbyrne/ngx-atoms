import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AtomsModule } from 'projects/atoms/src/public-api';

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
