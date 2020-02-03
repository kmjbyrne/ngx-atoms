import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'atom-datatable',
    templateUrl: 'datatable.component.html',
    styleUrls: ['datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit {
    @Input() config: any[];
    @Input() data: any[];
    @Input() templates: [];
    @Input() actions: any;
    @Input() buttonOverride: any;
    @Input() formstyles: any;
    @Input() search = true;

    @Output() clickEvent = new EventEmitter();

    order = true;
    currentSortKey = '';
    context = {};
    viewdata: any[];

    get headers() {
        if (this.config) {
            return this.config.filter(item => item.schema !== false);
        }
    }

    get loaddata() {
        return this.data;
    }

    constructor() {
    }

    ngAfterViewInit() {
        if (this.data) {
            this.cloneInputData();
        }
    }

    cloneInputData() {
        this.viewdata = [...this.loaddata];
    }

    checkOrder(array: any) {
        if (!this.order) {
            array.reverse();
        }
        return array;
    }

    splitNestedKey(row: any, header: any) {
        const keys = header.toString().split('.');
        let value = row[keys.shift()];
        keys.forEach(items => {
            value = value[items];
        });
        return value;
    }

    sort(key: string) {
        const dataClone = [...this.data];
        dataClone.sort((x, y) => (x[key] > y[key]) ? 1 : -1);
        this.data = [...this.checkOrder(dataClone)];
    }

    sortBy(header: string) {
        if (header === this.currentSortKey) {
            this.order = !this.order;
        }
        this.currentSortKey = header;
        this.sort(header);
    }

    sortedBy(name: string) {

    }

    sortHandler(name: string) {
        this.sortBy(name);
    }

    emitActionEvent(eventKey: string, eventObject: any) {
        const event = {
            key: eventKey,
            object: eventObject
        };
        this.clickEvent.emit(event);
    }

    searchTable(searchExpression: string) {
        if (this.viewdata === undefined) {
            this.viewdata = [...this.data];
        }
        this.data = this.viewdata.filter(item => {
            let match = false;
            this.config.forEach(configKey => {
                const value = item[configKey.key] || '';
                if (value.toString().toLowerCase().includes(searchExpression.toString().toLowerCase())) {
                    match = true;
                    return true;
                }
            });
            return match;
        });
    }

    searchEvent(event: any) {
        if (event !== '') {
            this.searchTable(event);
        } else {
            this.resetData();
        }
    }

    resetData() {
        this.data = [...this.viewdata];
    }

    colspan(): number {
        return this.actions.items.length;
    }
}
