import {Component, Output, EventEmitter} from '@angular/core';
import {HomeService} from './home.service'

@Component({
    selector: 'home-page',
    templateUrl: './app/pages/home/home.component.html'
})

export class HomePageComponent {
    @Output() onChildHideSideBar = new EventEmitter<boolean>();

    private isShowSiderBar: boolean = true;

    constructor(private homeSer: HomeService) {

    }

    childHideSideBar() {
        this.isShowSiderBar = !this.isShowSiderBar;
        this.onChildHideSideBar.emit(this.isShowSiderBar);
        //子组件发布
        this.homeSer.clickChildBtn(this.isShowSiderBar);
        //console.log("child isHideSiderBar=true");
    }
}