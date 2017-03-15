import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class HomeService {

    private childComponentSource = new Subject<boolean>();

    //定义可订阅属性
    public childComponent$ = this.childComponentSource.asObservable();

    clickChildBtn(showCmd: boolean) {
        this.childComponentSource.next(showCmd);
    }
}
