import {Directive, HostBinding, OnInit} from "@angular/core";
import {BaThemeConfigProvider,isMobile} from '../../theme';

@Directive({
    selector: '[baThemeRun]'
})

export class BaThemeRun implements OnInit {

    private _classes: Array<string> = [];

    @HostBinding('class') classesString: string;

    constructor(private _baConfig: BaThemeConfigProvider) {

    }

    public ngOnInit(): void {

    }

    private _assignTheme():void {
        this._addClass(this._baConfig.get().theme.name);
    }

    private _assignMobile():void {
        if (isMobile()) {
            this._addClass('mobile');
        }
    }

    private _addClass(cls: string) {
        this._classes.push(cls);
        this.classesString = this._classes.join(' ');
    }

}