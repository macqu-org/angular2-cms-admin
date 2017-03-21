import {Component} from '@angular/core';

import 'style-loader!./baPageTop.scss';
import {GlobalState} from "../../../app.global.state";

@Component({
  selector: 'ba-page-top',
  templateUrl: 'app/theme/components/baPageTop/baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed:any) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled:any) {
    this.isScrolled = isScrolled;
  }
}
