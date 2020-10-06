import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'atom-label-block',
    templateUrl: './label-block.component.html',
    styleUrls: ['./label-block.component.scss'],
})
export class LabelBlockComponent implements OnInit {
    @Input() item: any;
    @Input() label: string;
    @Input() itemkey: string;
    @Input() key: string;

    constructor() {}

    ngOnInit(): void {}
}
