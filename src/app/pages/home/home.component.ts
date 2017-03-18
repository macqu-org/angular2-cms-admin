import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html'
})

export class HomePageComponent {
    @Output() onChildHideSideBar = new EventEmitter<boolean>();

    private isShowSiderBar: boolean = true;

    constructor() {

    }

    childHideSideBar() {
        this.isShowSiderBar = !this.isShowSiderBar;
        this.onChildHideSideBar.emit(this.isShowSiderBar);
    }
}