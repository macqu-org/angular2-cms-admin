import {Component, Input, Output, EventEmitter} from '@angular/core';

import 'style-loader!./baMenuItem.scss';

@Component({
    selector: 'ba-menu-item',
    templateUrl: 'app/theme/components/baMenu/components/baMenuItem/baMenuItem.html'
})
export class BaMenuItem {

    @Input() menuItem: any;
    @Input() child: boolean = false;

    @Output() itemHover = new EventEmitter<any>();
    @Output() toggleSubMenu = new EventEmitter<any>();

    public onHoverItem($event: any): void {
        this.itemHover.emit($event);
    }

    public onToggleSubMenu($event: any, item: any): boolean {
        $event.item = item;
        this.toggleSubMenu.emit($event);
        return false;
    }
}
