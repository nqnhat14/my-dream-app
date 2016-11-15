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
const forms_1 = require("@angular/forms");
const login_service_1 = require("../services/login.service");
const router_1 = require("@angular/router");
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginForm = new forms_1.FormGroup({
            'email': new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            'password': new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    ngOnInit() {
        const authData = localStorage.getItem("authData");
        console.log(authData);
        if (authData != "" && authData != null) {
            this.router.navigate(['./home']);
        }
    }
    onSubmit() {
        this.loginService.login({ email: this.loginForm.value.email, password: this.loginForm.value.password })
            .subscribe((data) => {
            localStorage.setItem("authData", JSON.stringify(data));
            this.router.navigate(['./home']);
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }), 
    __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ2xFLGdDQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3ZELHlCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBUXZDO0lBSUUsWUFBb0IsWUFBMEIsRUFBVSxNQUFjO1FBQWxELGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUM3QixPQUFPLEVBQUUsSUFBSSxtQkFBVyxDQUFDLEVBQUUsRUFBRTtnQkFDM0Isa0JBQVUsQ0FBQyxRQUFRO2dCQUNuQixrQkFBVSxDQUFDLE9BQU8sQ0FBQyx1SUFBdUksQ0FBQzthQUM1SixDQUFDO1lBQ0YsVUFBVSxFQUFFLElBQUksbUJBQVcsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUUsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUMsQ0FBQzthQUNsRyxTQUFTLENBQUMsQ0FBQyxJQUFJO1lBQ2QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFFSCxDQUFDO0FBcENEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3JDLENBQUM7O2tCQUFBO0FBQ1csc0JBQWMsaUJBOEIxQixDQUFBIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7TG9naW5TZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbG9naW5Gb3JtOiBGb3JtR3JvdXA7XG4gIGluZm86IFN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5sb2dpbkZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICdlbWFpbCc6IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oXCJbYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cIilcbiAgICAgIF0pLFxuICAgICAgJ3Bhc3N3b3JkJzogbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgYXV0aERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhEYXRhXCIpO1xuICAgIGNvbnNvbGUubG9nKGF1dGhEYXRhKTtcbiAgICBpZiAoYXV0aERhdGEgIT0gXCJcIiAmJiBhdXRoRGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vaG9tZSddKTtcbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih7ZW1haWw6IHRoaXMubG9naW5Gb3JtLnZhbHVlLmVtYWlsLCBwYXNzd29yZDogdGhpcy5sb2dpbkZvcm0udmFsdWUucGFzc3dvcmR9KVxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aERhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy4vaG9tZSddKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==
