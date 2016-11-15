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
let HomeComponent = class HomeComponent {
    constructor() {
    }
    ngOnInit() {
        Layout.initOWL();
        Layout.initImageZoom();
        Layout.initTouchspin();
        Layout.initTwitter();
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }), 
    __metadata('design:paramtypes', [])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQVFsRDtJQUVFO0lBQWdCLENBQUM7SUFFakIsUUFBUTtRQUNOLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0FBQ0gsQ0FBQztBQWhCRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDOztpQkFBQTtBQUNXLHFCQUFhLGdCQVV6QixDQUFBIiwiZmlsZSI6ImhvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6bW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgTGF5b3V0OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgTGF5b3V0LmluaXRPV0woKTtcbiAgICBMYXlvdXQuaW5pdEltYWdlWm9vbSgpO1xuICAgIExheW91dC5pbml0VG91Y2hzcGluKCk7XG4gICAgTGF5b3V0LmluaXRUd2l0dGVyKCk7XG4gIH1cbn1cbiJdfQ==
