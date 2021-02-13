import { Component, OnInit,QueryList, ViewChildren} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  @ViewChildren('slider') slider: QueryList<NouisliderComponent>;
  public formControls: any;
  public newPageForm: FormGroup;
  public monthlyIncomeValue: any;
  public minValue : any;
  public maxVlaue :any;
  public monthlyExpenseValue :any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.minValue = 10000;
    this.maxVlaue = 3000000;
    this.monthlyIncomeValue = 0;
    this.monthlyExpenseValue = 0;
    this.initializeForm();
  }
    /**
     * Method to define personal info form group
     * @method initPersonalInfoFrom
     * @return {void}
     */
    private initializeForm() {
      this.newPageForm = this.fb.group({
        monthlyIncome: ['', [Validators.required]]
      });
      this.formControls = this.newPageForm.controls;
    }
    public getMonthlyValue(event){
      this.monthlyIncomeValue = event;
    }
    public getExpenseValue(event){
      this.monthlyExpenseValue = event;
    }
}
