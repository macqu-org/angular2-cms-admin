import {Component, OnInit, OnDestroy, ElementRef} from "@angular/core";

@Component({
    selector: 'page-news',
    template: 'page-news component content.'
})

export class NewsComponent implements OnInit,OnDestroy {
    private promise: Promise<any>;

    constructor(private elementRef: ElementRef) {
        this.promise = new Promise((resolve, reject) => {
            jQuery.get('/news/newspool', (htmlData: any) => {
                resolve(htmlData);
            });
        });
    }

    ngOnInit(): void {
        this.promise.then((htmlData) => {
            jQuery(this.elementRef.nativeElement).empty().append(htmlData);
        }).catch(function (error) {
            console.error(error);
        })
    }

    ngOnDestroy(): void {
        jQuery(this.elementRef.nativeElement).empty();
    }
}