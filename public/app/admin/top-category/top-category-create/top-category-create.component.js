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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const top_category_service_service_1 = require("../../services/top-category-service.service");
let TopCategoryCreateComponent = class TopCategoryCreateComponent {
    constructor(formBuilder, topCategoryService, router, route) {
        this.formBuilder = formBuilder;
        this.topCategoryService = topCategoryService;
        this.router = router;
        this.route = route;
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
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.createForm = this.formBuilder.group({
            name: ['',
                [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(24),
                    this.forbiddenNameValidator(/bob/i)
                ]
            ]
        });
        this.createForm.valueChanges
            .subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
    }
    onValueChanged(data) {
        if (!this.createForm) {
            return;
        }
        const form = this.createForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
    forbiddenNameValidator(nameRe) {
        return (control) => {
            const name = control.value;
            const no = nameRe.test(name);
            console.log(no);
            return no ? { 'forbiddenName': { name } } : null;
        };
    }
    onSubmit() {
        const newTopCategory = this.createForm.value;
        this.topCategoryService.create(newTopCategory).subscribe((data) => {
            this.router.navigate(['../list'], { relativeTo: this.route });
        }, (error) => {
            console.error(error);
        });
    }
};
TopCategoryCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-top-category-create',
        templateUrl: './top-category-create.component.html',
        styleUrls: ['./top-category-create.component.css']
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, top_category_service_service_1.TopCategoryService, router_1.Router, router_1.ActivatedRoute])
], TopCategoryCreateComponent);
exports.TopCategoryCreateComponent = TopCategoryCreateComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL3RvcC1jYXRlZ29yeS90b3AtY2F0ZWdvcnktY3JlYXRlL3RvcC1jYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsd0JBQStFLGdCQUFnQixDQUFDLENBQUE7QUFDaEcseUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsK0NBQWlDLDZDQUE2QyxDQUFDLENBQUE7QUFRL0U7SUFHRSxZQUFvQixXQUF3QixFQUFVLGtCQUFxQyxFQUFVLE1BQWEsRUFBVSxLQUFxQjtRQUE3SCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUF5Q2pKLGVBQVUsR0FBRztZQUNYLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBQ0YsdUJBQWtCLEdBQUc7WUFDbkIsTUFBTSxFQUFFO2dCQUNOLFVBQVUsRUFBRSxtQkFBbUI7Z0JBQy9CLFdBQVcsRUFBRSwwQ0FBMEM7Z0JBQ3ZELFdBQVcsRUFBRSw4Q0FBOEM7Z0JBQzNELGVBQWUsRUFBRSxnQkFBZ0I7YUFDbEM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsVUFBVSxFQUFFLG9CQUFvQjthQUNqQztTQUNGLENBQUM7SUF0REYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLElBQUksRUFBRSxDQUFDLEVBQUU7Z0JBQ1A7b0JBQ0Usa0JBQVUsQ0FBQyxRQUFRO29CQUNuQixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztpQkFDcEM7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWTthQUN6QixTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxrQ0FBa0M7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFVO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEMsd0NBQXdDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNoRCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBaUJELHNCQUFzQixDQUFDLE1BQWM7UUFDbkMsTUFBTSxDQUFDLENBQUMsT0FBd0I7WUFDOUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFDLGVBQWUsRUFBRSxFQUFDLElBQUksRUFBQyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9DLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQ3RELENBQUMsSUFBSTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxFQUNELENBQUMsS0FBSztZQUNKLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0FBRUgsQ0FBQztBQXRGRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxXQUFXLEVBQUUsc0NBQXNDO1FBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO0tBQ25ELENBQUM7OzhCQUFBO0FBQ1csa0NBQTBCLDZCQWdGdEMsQ0FBQSIsImZpbGUiOiJhZG1pbi90b3AtY2F0ZWdvcnkvdG9wLWNhdGVnb3J5LWNyZWF0ZS90b3AtY2F0ZWdvcnktY3JlYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdG9yRm59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1RvcENhdGVnb3J5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3RvcC1jYXRlZ29yeS1zZXJ2aWNlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXRvcC1jYXRlZ29yeS1jcmVhdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9wLWNhdGVnb3J5LWNyZWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RvcC1jYXRlZ29yeS1jcmVhdGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvcENhdGVnb3J5Q3JlYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY3JlYXRlRm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHRvcENhdGVnb3J5U2VydmljZTpUb3BDYXRlZ29yeVNlcnZpY2UsIHByaXZhdGUgcm91dGVyOlJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdEZvcm0oKTtcbiAgfVxuXG4gIGluaXRGb3JtKCkge1xuICAgIHRoaXMuY3JlYXRlRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgbmFtZTogWycnLFxuICAgICAgICBbXG4gICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxcbiAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgyNCksXG4gICAgICAgICAgdGhpcy5mb3JiaWRkZW5OYW1lVmFsaWRhdG9yKC9ib2IvaSlcbiAgICAgICAgXVxuICAgICAgXVxuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlRm9ybS52YWx1ZUNoYW5nZXNcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLm9uVmFsdWVDaGFuZ2VkKGRhdGEpKTtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7IC8vIChyZSlzZXQgdmFsaWRhdGlvbiBtZXNzYWdlcyBub3dcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2VkKGRhdGE/OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuY3JlYXRlRm9ybSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmb3JtID0gdGhpcy5jcmVhdGVGb3JtO1xuICAgIGZvciAoY29uc3QgZmllbGQgaW4gdGhpcy5mb3JtRXJyb3JzKSB7XG4gICAgICAvLyBjbGVhciBwcmV2aW91cyBlcnJvciBtZXNzYWdlIChpZiBhbnkpXG4gICAgICB0aGlzLmZvcm1FcnJvcnNbZmllbGRdID0gJyc7XG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybS5nZXQoZmllbGQpO1xuICAgICAgaWYgKGNvbnRyb2wgJiYgY29udHJvbC5kaXJ0eSAmJiAhY29udHJvbC52YWxpZCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzW2ZpZWxkXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gY29udHJvbC5lcnJvcnMpIHtcbiAgICAgICAgICB0aGlzLmZvcm1FcnJvcnNbZmllbGRdICs9IG1lc3NhZ2VzW2tleV0gKyAnICc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3JtRXJyb3JzID0ge1xuICAgICduYW1lJzogJycsXG4gICAgJ3Bvd2VyJzogJydcbiAgfTtcbiAgdmFsaWRhdGlvbk1lc3NhZ2VzID0ge1xuICAgICduYW1lJzoge1xuICAgICAgJ3JlcXVpcmVkJzogJ05hbWUgaXMgcmVxdWlyZWQuJyxcbiAgICAgICdtaW5sZW5ndGgnOiAnTmFtZSBtdXN0IGJlIGF0IGxlYXN0IDQgY2hhcmFjdGVycyBsb25nLicsXG4gICAgICAnbWF4bGVuZ3RoJzogJ05hbWUgY2Fubm90IGJlIG1vcmUgdGhhbiAyNCBjaGFyYWN0ZXJzIGxvbmcuJyxcbiAgICAgICdmb3JiaWRkZW5OYW1lJzogJ0ZvcmJpZGRlbiBOYW1lJ1xuICAgIH0sXG4gICAgJ3Bvd2VyJzoge1xuICAgICAgJ3JlcXVpcmVkJzogJ1Bvd2VyIGlzIHJlcXVpcmVkLidcbiAgICB9XG4gIH07XG4gIGZvcmJpZGRlbk5hbWVWYWxpZGF0b3IobmFtZVJlOiBSZWdFeHApOiBWYWxpZGF0b3JGbiB7XG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gY29udHJvbC52YWx1ZTtcbiAgICAgIGNvbnN0IG5vID0gbmFtZVJlLnRlc3QobmFtZSk7XG4gICAgICBjb25zb2xlLmxvZyhubyk7XG4gICAgICByZXR1cm4gbm8gPyB7J2ZvcmJpZGRlbk5hbWUnOiB7bmFtZX19IDogbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgY29uc3QgbmV3VG9wQ2F0ZWdvcnkgPSB0aGlzLmNyZWF0ZUZvcm0udmFsdWU7XG4gICAgdGhpcy50b3BDYXRlZ29yeVNlcnZpY2UuY3JlYXRlKG5ld1RvcENhdGVnb3J5KS5zdWJzY3JpYmUoXG4gICAgICAoZGF0YSk9PntcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycuLi9saXN0J10seyByZWxhdGl2ZVRvOiB0aGlzLnJvdXRlIH0pO1xuICAgICAgfSxcbiAgICAgIChlcnJvcik9PntcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG4iXX0=
