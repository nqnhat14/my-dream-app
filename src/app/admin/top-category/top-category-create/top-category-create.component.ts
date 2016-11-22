import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {TopCategoryService} from "../../services/top-category-service.service";

@Component({
  moduleId: module.id,
  selector: 'app-top-category-create',
  templateUrl: './top-category-create.component.html',
  styleUrls: ['./top-category-create.component.css']
})
export class TopCategoryCreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private topCategoryService:TopCategoryService, private router:Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.createForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(24),
          this.forbiddenNameValidator(/bob/i)
        ]
      ]
    });
    this.createForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
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

  formErrors = {
    'name': '',
    'power': ''
  };
  validationMessages = {
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
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const name = control.value;
      const no = nameRe.test(name);
      console.log(no);
      return no ? {'forbiddenName': {name}} : null;
    };
  }

  onSubmit() {
    const newTopCategory = this.createForm.value;
    this.topCategoryService.create(newTopCategory).subscribe(
      (data)=>{
        this.router.navigate(['../list'],{ relativeTo: this.route });
      },
      (error)=>{
        console.error(error);
      }
    );
  }

}
