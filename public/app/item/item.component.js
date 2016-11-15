"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
let ItemComponent = class ItemComponent {
    constructor() {
    }
    ngOnInit() {
        Layout.init();
        Layout.initOWL();
        Layout.initTwitter();
        Layout.initImageZoom();
        Layout.initTouchspin();
        Layout.initUniform();
        Layout.initRateIt();
    }
};
ItemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    }), 
    __metadata('design:paramtypes', [])
], ItemComponent);
exports.ItemComponent = ItemComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW0vaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQVFsRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsUUFBUTtRQUNOLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXRCLENBQUM7QUFFSCxDQUFDO0FBckJEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0tBQ3BDLENBQUM7O2lCQUFBO0FBQ1cscUJBQWEsZ0JBZXpCLENBQUEiLCJmaWxlIjoiaXRlbS9pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDptb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2l0ZW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBMYXlvdXQ6YW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIExheW91dC5pbml0KCk7XG4gICAgTGF5b3V0LmluaXRPV0woKTtcbiAgICBMYXlvdXQuaW5pdFR3aXR0ZXIoKTtcbiAgICBMYXlvdXQuaW5pdEltYWdlWm9vbSgpO1xuICAgIExheW91dC5pbml0VG91Y2hzcGluKCk7XG4gICAgTGF5b3V0LmluaXRVbmlmb3JtKCk7XG4gICAgTGF5b3V0LmluaXRSYXRlSXQoKTtcblxuICB9XG5cbn1cbiJdfQ==
