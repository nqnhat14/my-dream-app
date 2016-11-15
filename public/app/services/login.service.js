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
const http_1 = require("@angular/http");
const staticString_1 = require("../utilities/staticString");
require('rxjs/Rx');
const base64_1 = require("../utilities/base64");
let LoginService = class LoginService {
    constructor(http, base64) {
        this.http = http;
        this.base64 = base64;
    }
    login(user) {
        const data = {
            grant_type: "password",
            username: user.email,
            password: user.password
        };
        const body = JSON.stringify(data);
        const headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.base64.encode('123:456'));
        return this.http.post(staticString_1.staticString.apiUrl + "token", body, { headers: headers })
            .map((data) => data.json());
    }
};
LoginService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, base64_1.Base64])
], LoginService);
exports.LoginService = LoginService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBc0MsZUFBZSxDQUFDLENBQUE7QUFDdEQsK0JBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQix5QkFBcUIscUJBQXFCLENBQUMsQ0FBQTtBQUUzQztJQUVFLFlBQW9CLElBQVMsRUFBVSxNQUFhO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO0lBQUksQ0FBQztJQUN6RCxLQUFLLENBQUMsSUFBUTtRQUNaLE1BQU0sSUFBSSxHQUFHO1lBQ1gsVUFBVSxFQUFDLFVBQVU7WUFDckIsUUFBUSxFQUFDLElBQUksQ0FBQyxLQUFLO1lBQ25CLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtTQUN2QixDQUFBO1FBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sRUFBQyxJQUFJLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUNGLENBQUMsSUFBYSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FDL0IsQ0FBQztJQUNOLENBQUM7QUFDSCxDQUFDO0FBbkJEO0lBQUMsaUJBQVUsRUFBRTs7Z0JBQUE7QUFDQSxvQkFBWSxlQWtCeEIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7c3RhdGljU3RyaW5nfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0YXRpY1N0cmluZ1wiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7QmFzZTY0fSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Jhc2U2NFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHAsIHByaXZhdGUgYmFzZTY0OkJhc2U2NCkgeyB9XG4gIGxvZ2luKHVzZXI6YW55KXtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZ3JhbnRfdHlwZTpcInBhc3N3b3JkXCIsXG4gICAgICB1c2VybmFtZTp1c2VyLmVtYWlsLFxuICAgICAgcGFzc3dvcmQ6dXNlci5wYXNzd29yZFxuICAgIH1cbiAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICBoZWFkZXJzLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsJ0Jhc2ljICcgKyB0aGlzLmJhc2U2NC5lbmNvZGUoJzEyMzo0NTYnKSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHN0YXRpY1N0cmluZy5hcGlVcmwgKyBcInRva2VuXCIsYm9keSx7aGVhZGVyczpoZWFkZXJzfSlcbiAgICAgIC5tYXAoXG4gICAgICAgIChkYXRhOlJlc3BvbnNlKSA9PiBkYXRhLmpzb24oKVxuICAgICAgKTtcbiAgfVxufVxuIl19
