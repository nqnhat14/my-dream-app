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
let TestService = class TestService {
    constructor() {
        this.headerChanges = new core_1.EventEmitter();
        this.showHeader = true;
    }
    hideHeader() {
        this.headerChanges.emit(false);
    }
};
TestService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], TestService);
exports.TestService = TestService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Rlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBR3ZEO0lBR0U7UUFGQSxrQkFBYSxHQUFxQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUNyRCxlQUFVLEdBQVcsSUFBSSxDQUFDO0lBRTFCLENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztBQUVILENBQUM7QUFWRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQVN2QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL3Rlc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRlc3RTZXJ2aWNlIHtcbiAgaGVhZGVyQ2hhbmdlczpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2hvd0hlYWRlcjpib29sZWFuID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgaGlkZUhlYWRlcigpe1xuICAgIHRoaXMuaGVhZGVyQ2hhbmdlcy5lbWl0KGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=
