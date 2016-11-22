import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {TopCategoryService} from "../../services/top-category-service.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {TopCategoryValidator} from "../../validators/topCategoryValidator";

@Component({
  moduleId: module.id,
  selector: 'app-top-category-edit',
  templateUrl: './top-category-edit.component.html',
  styleUrls: ['./top-category-edit.component.css']
})
export class TopCategoryEditComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  //form element
  editForm: FormGroup;
  name: FormControl;

  //
  topCategoryId;
  private subscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private topCategoryService: TopCategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any) => {
        this.topCategoryId = param['id'];
        this.topCategoryService.getTopCategory(this.topCategoryId).subscribe(
          (data)=> {
            this.name.setValue(data.name);
          }
        );
      });
    this.initForm();
  }

  //initial the form
  initForm() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(24),
      TopCategoryValidator.checkForbiddenNameValidator(/bob/i),
    ], [TopCategoryValidator.usernameTaken(this.topCategoryId)]);
    this.editForm = this.formBuilder.group({
      name: this.name
    });
  }

  onSubmit() {
    const newTopCategory = this.editForm.value;
    newTopCategory.id = this.topCategoryId;
    this.topCategoryService.update(newTopCategory).subscribe(
      (data)=> {
        this.router.navigate(['../../list'], {relativeTo: this.activatedRoute});
      },
      (error)=> {
        console.error(error);
      }
    );
  }
}
