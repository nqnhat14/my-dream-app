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
let AppComponent = class AppComponent {
    constructor() {
        this.isDarkTheme = false;
        this.foods = [
            { name: 'Pizza', rating: 'Excellent' },
            { name: 'Burritos', rating: 'Great' },
            { name: 'French fries', rating: 'Pretty good' },
        ];
        this.progress = 0;
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css']
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QixlQUFlLENBQUMsQ0FBQTtBQVF4QztJQVdFO1FBVkEsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsVUFBSyxHQUFVO1lBQ2IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUM7U0FDOUMsQ0FBQztRQUVGLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHbkIsd0RBQXdEO1FBQ3hELFdBQVcsQ0FBQztZQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUM1RSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0FBQ0gsQ0FBQztBQXZCRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztLQUNqQyxDQUFDOztnQkFBQTtBQUNXLG9CQUFZLGVBaUJ4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBpc0RhcmtUaGVtZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGZvb2RzOiBhbnlbXSA9IFtcbiAgICB7bmFtZTogJ1BpenphJywgcmF0aW5nOiAnRXhjZWxsZW50J30sXG4gICAge25hbWU6ICdCdXJyaXRvcycsIHJhdGluZzogJ0dyZWF0J30sXG4gICAge25hbWU6ICdGcmVuY2ggZnJpZXMnLCByYXRpbmc6ICdQcmV0dHkgZ29vZCd9LFxuICBdO1xuXG4gIHByb2dyZXNzOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgdmFsdWUgZm9yIHRoZSBwcm9ncmVzcy1iYXIgb24gYW4gaW50ZXJ2YWwuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9ncmVzcyA9ICh0aGlzLnByb2dyZXNzICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAxKSAlIDEwMDtcbiAgICB9LCAyMDApO1xuICB9XG59XG4iXX0=
