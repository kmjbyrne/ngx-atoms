import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
    {
        path: '',
        // component: AppComponent,
        children: [
            {
                path: 'forms',
                component: FormsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
