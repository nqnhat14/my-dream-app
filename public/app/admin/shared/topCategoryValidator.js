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
const core_1 = require("@angular/core");
/**
 * Created by nqnha on 11/17/2016.
 */
let TopCategoryValidator = class TopCategoryValidator {
    constructor() {
        this.formErrors = {
            'name': '',
            'power': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Forbidden Name'
            },
            'power': {
                'required': 'Power is required.'
            }
        };
    }
};
TopCategoryValidator = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], TopCategoryValidator);
exports.TopCategoryValidator = TopCategoryValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3NoYXJlZC90b3BDYXRlZ29yeVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBRXpDOztHQUVHO0FBRUg7SUFDRTtRQUVPLGVBQVUsR0FBRztZQUNsQixNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNLLHVCQUFrQixHQUFHO1lBQzFCLE1BQU0sRUFBRTtnQkFDTixVQUFVLEVBQUUsbUJBQW1CO2dCQUMvQixXQUFXLEVBQUUsMENBQTBDO2dCQUN2RCxXQUFXLEVBQUUsOENBQThDO2dCQUMzRCxlQUFlLEVBQUUsZ0JBQWdCO2FBQ2xDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLFVBQVUsRUFBRSxvQkFBb0I7YUFDakM7U0FDRixDQUFDO0lBZkYsQ0FBQztBQXdCSCxDQUFDO0FBM0JEO0lBQUMsaUJBQVUsRUFBRTs7d0JBQUE7QUFDQSw0QkFBb0IsdUJBMEJoQyxDQUFBIiwiZmlsZSI6ImFkbWluL3NoYXJlZC90b3BDYXRlZ29yeVZhbGlkYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sLCBWYWxpZGF0b3JGbn0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG4vKipcbiAqIENyZWF0ZWQgYnkgbnFuaGEgb24gMTEvMTcvMjAxNi5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvcENhdGVnb3J5VmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cbiAgcHVibGljIGZvcm1FcnJvcnMgPSB7XG4gICAgJ25hbWUnOiAnJyxcbiAgICAncG93ZXInOiAnJ1xuICB9O1xuICBwdWJsaWMgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xuICAgICduYW1lJzoge1xuICAgICAgJ3JlcXVpcmVkJzogJ05hbWUgaXMgcmVxdWlyZWQuJyxcbiAgICAgICdtaW5sZW5ndGgnOiAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyBsb25nLicsXG4gICAgICAnbWF4bGVuZ3RoJzogJ05hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAyNCBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICAgICdmb3JiaWRkZW5OYW1lJzogJ0ZvcmJpZGRlbiBOYW1lJ1xuICAgIH0sXG4gICAgJ3Bvd2VyJzoge1xuICAgICAgJ3JlcXVpcmVkJzogJ1Bvd2VyIGlzIHJlcXVpcmVkLidcbiAgICB9XG4gIH07XG4gIC8vIHB1YmxpYyBmb3JiaWRkZW5OYW1lVmFsaWRhdG9yKG5hbWVSZTogUmVnRXhwKTogVmFsaWRhdG9yRm4ge1xuICAvLyAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0gPT4ge1xuICAvLyAgICAgY29uc3QgbmFtZSA9IGNvbnRyb2wudmFsdWU7XG4gIC8vICAgICBjb25zdCBubyA9IG5hbWVSZS50ZXN0KG5hbWUpO1xuICAvLyAgICAgY29uc29sZS5sb2cobm8pO1xuICAvLyAgICAgcmV0dXJuIG5vID8geydmb3JiaWRkZW5OYW1lJzoge25hbWV9fSA6IG51bGw7XG4gIC8vICAgfTtcbiAgLy8gfVxufVxuIl19
