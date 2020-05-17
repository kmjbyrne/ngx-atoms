import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'atoms-showcase';

    data = [
        {
            name: 'test',
            type: 'test',
        },
        {
            name: '1',
            type: 'test',
        },
        {
            name: '2',
            type: 'test',
        },
    ];
    config = [
        {
            key: 'name',
            name: 'name',
        },
        {
            key: 'type',
            name: 'type',
        },
    ];

    actions = {
        name: 'actions',
        key: 'actions',
        schema: false,
        items: [
            {
                name: 'Edit',
                key: 'edit',
            },
        ],
    };
    constructor(private http: HttpClient) {}
    ngOnInit() {
        this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((resp: any) => {});
    }
}
