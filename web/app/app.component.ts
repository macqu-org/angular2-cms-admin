import {Component, OnDestroy} from '@angular/core';
import {HomeService} from './pages/home/home.service';
import {Subscription} from "rxjs";


@Component({
    selector: 'app-root',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    providers: [HomeService]
})
export class AppComponent implements OnDestroy {
    public isShowSiderBar: boolean = true;

    private subscription: Subscription;


    constructor(private homeSer: HomeService) {
        this.subscription = this.homeSer.childComponent$.subscribe((showCmd) => {
            console.log('parent accepted showCmd= ' + showCmd);
            this.isShowSiderBar = showCmd;
        });
    }

    ngOnDestroy(): void {
        //组件销毁时，取消订阅
        this.subscription.unsubscribe();
    }

    //来源于子组件的事件
    onReceiveHideSideBarEventEmit(isHideSideBar: boolean) {
        this.isShowSiderBar = isHideSideBar;
        console.log("parent isHideSiderBar=" + this.isShowSiderBar);
    }
}

