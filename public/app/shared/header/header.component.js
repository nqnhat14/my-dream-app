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
let HeaderComponent = class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        Layout.initOWL();
        Layout.initImageZoom();
        Layout.initTouchspin();
        Layout.initTwitter();
    }
    ngOnDestroy() {
    }
};
HeaderComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }), 
    __metadata('design:paramtypes', [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTJDLGVBQWUsQ0FBQyxDQUFBO0FBUzNEO0lBR0U7SUFBZ0IsQ0FBQztJQUNqQixRQUFRO1FBQ04sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxXQUFXO0lBQ1gsQ0FBQztBQUVILENBQUM7QUFuQkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDdEMsQ0FBQzs7bUJBQUE7QUFDVyx1QkFBZSxrQkFhM0IsQ0FBQSIsImZpbGUiOiJzaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3l9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gXCJyeGpzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDptb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBMYXlvdXQ6YW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBuZ09uSW5pdCgpIHtcbiAgICBMYXlvdXQuaW5pdE9XTCgpO1xuICAgIExheW91dC5pbml0SW1hZ2Vab29tKCk7XG4gICAgTGF5b3V0LmluaXRUb3VjaHNwaW4oKTtcbiAgICBMYXlvdXQuaW5pdFR3aXR0ZXIoKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG59XG4iXX0=
