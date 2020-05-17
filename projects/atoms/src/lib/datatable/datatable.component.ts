import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    ChangeDetectorRef,
    ViewChildren,
} from '@angular/core';
import { TableHeaderComponent } from './table-header/table-header.component';
import { BehaviorSubject } from 'rxjs';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'atom-datatable',
    templateUrl: 'datatable.component.html',
    styleUrls: ['datatable.component.scss'],
})
export class DatatableComponent implements AfterViewChecked {
    @Input() config: any[];
    @Input() data: any[];
    @Input() templates: [];
    @Input() actions: any;
    @Input() buttonOverride: any;
    @Input() formstyles: any;
    @Input() search = true;
    @Input() editable = true;

    @Output() clickEvent = new EventEmitter();

    @ViewChildren(TableHeaderComponent) headerComponents;

    constructor(private cdRef: ChangeDetectorRef) {}

    order = true;
    currentSortKey = '';
    context = {};
    viewdata: any = false;
    displayData = new BehaviorSubject<any[]>(undefined);

    get headers() {
        if (this.config) {
            return this.config.filter((item) => item.schema !== false);
        }
    }

    get loaddata() {
        return this.data;
    }

    ngAfterViewChecked() {
        if (this.data) {
            this.cloneInputData();
            this.cdRef.detectChanges();
        }
        this.cdRef.detectChanges();
    }

    cloneInputData() {
        this.displayData.next([...this.loaddata]);
        this.viewdata = [...this.loaddata];
    }

    checkOrder(array: any) {
        if (!this.order) {
            array.reverse();
        }
        return array;
    }

    conditionalCheck(row, action) {
        let pass = true;
        if (action.condition) {
            Object.keys(action.condition).forEach((key) => {
                if (row[key] !== action.condition[key]) {
                    pass = false;
                    return;
                }
            });
        }
        return pass;
    }

    splitNestedKey(row: any, header: any) {
        const keys = header.toString().split('.');
        let value = row[keys.shift()];
        keys.forEach((items) => {
            value = value[items];
        });
        return value;
    }

    sort(key: string) {
        const dataClone = [...this.data];
        dataClone.sort((x, y) => (x[key] > y[key] ? 1 : -1));
        this.data = [...this.checkOrder(dataClone)];
    }

    sortBy(header: string) {
        if (header === this.currentSortKey) {
            this.order = !this.order;
        }
        this.currentSortKey = header;
        this.sort(header);
    }

    sortedBy(name: string) {}

    sortHandler(name: string) {
        this.headerComponents.forEach((item) => {
            if (item.name === name) {
                if (item.toggled) {
                    item.reverse = !item.reverse;
                } else {
                    item.toggled = true;
                    item.reverse = false;
                }
            } else {
                item.reverse = false;
                item.toggled = false;
            }
        });
        this.sortBy(name);
    }

    emitActionEvent(eventKey: string, eventObject: any) {
        const event = {
            key: eventKey,
            object: eventObject,
        };
        this.clickEvent.emit(event);
    }

    searchTable(searchExpression: string) {
        if (this.viewdata === undefined) {
            this.viewdata = [...this.data];
        }

        const resultingData = this.viewdata.filter((item) => {
            let match = false;
            this.config.forEach((configKey) => {
                let value = item[configKey.key] || '';
                value = value.toString().toLowerCase();
                const searchLower = searchExpression.toString().toLowerCase();
                if (value.includes(searchLower)) {
                    match = true;
                    return true;
                }
            });
            return match;
        });
        this.displayData.next(resultingData);
        this.cdRef.detectChanges();
    }

    searchEvent(event: any) {
        if (event !== '') {
            this.searchTable(event);
        } else {
            this.resetData();
        }
    }

    resetData() {
        this.viewdata = [...this.data];
    }

    colspan(): number {
        if (this.actions) {
            if (this.actions.length === undefined) {
                return 0;
            }
            return this.actions.length || 0;
        }
    }
}
