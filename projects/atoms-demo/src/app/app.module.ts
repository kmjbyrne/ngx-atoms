import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AtomsModule } from 'projects/atoms/src/public-api';
import { FormsComponent } from './components/forms/forms.component';
import { AtomsFormsElementModule } from 'projects/atoms/src/public-api';
import { LabelBlockComponent } from './form-element/label-block/label-block.component';

@NgModule({
    declarations: [AppComponent, FormsComponent, LabelBlockComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // CommonModule,
        HttpClientModule,
        MarkdownModule.forRoot({
            loader: HttpClient, // optional, only if you use [src] attribute
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    breaks: false,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                },
            },
        }),
        AtomsModule,
        AtomsFormsElementModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
