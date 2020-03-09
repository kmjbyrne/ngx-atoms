import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-table-search',
    templateUrl: './table-search.component.html',
    styleUrls: ['./table-search.component.scss']
})
export class TableSearchComponent implements OnInit {
    @Input() formstyle: any;

    @Output() searchEditEvent = new EventEmitter();

    public searchForm = new FormGroup({
        search: new FormControl('', [Validators.required])
    });

    constructor() {}

    ngOnInit() {
        this.searchForm.valueChanges.subscribe(value => {
            this.searchChanged(value.search);
        });
    }

    inputListen() {
        this.searchChanged(this.searchForm.value.search);
    }

    searchChanged(value: string) {
        this.searchEditEvent.emit(value);
    }

    onSubmit() {
        this.searchChanged(this.searchForm.value.search);
    }
}
