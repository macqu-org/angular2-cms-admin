import {Directive, Input, Output, ElementRef, EventEmitter, OnChanges} from '@angular/core';

import 'jquery';
declare var jQuery: any;

import 'jquery-slimscroll';

@Directive({
    selector: '[baSlimScroll]'
})
export class BaSlimScroll implements OnChanges {

    @Input() public baSlimScrollOptions: Object;

    constructor(private _elementRef: ElementRef) {
    }

    ngOnChanges(changes: any) {
        this._scroll();
    }

    private _scroll() {
        this._destroy();
        this._init();
    }

    private _init() {
        jQuery(this._elementRef.nativeElement).slimScroll(this.baSlimScrollOptions);
    }

    private _destroy() {
        jQuery(this._elementRef.nativeElement).slimScroll({destroy: true});
    }
}
