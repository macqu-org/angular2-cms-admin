import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MenuServce {
    menuItems = new BehaviorSubject<any[]>([]);

    public updateMenuByRoutes(routes: Routes) {
        //TODO:获取菜单
        let items: any[] = [];
        routes.forEach((route) => {
            let item: any = {};
            item.route = route;
            items.push(item);
        });

        this.menuItems.next(items);
    }
}