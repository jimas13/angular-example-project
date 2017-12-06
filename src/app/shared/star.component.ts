import { Component, Output, EventEmitter } from "@angular/core";
import { OnChanges } from "@angular/core/src/metadata/lifecycle_hooks";
import { Input } from "@angular/core";
@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
@Input() rating:number;
starWidth:number;
@Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();
ngOnChanges():void{
    this.starWidth=this.rating*86/5;
}
onClick():void{
    this.ratingClicked.emit(`the rating ${this.rating} clicked`);
}
}