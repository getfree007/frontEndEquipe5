import { Component, OnInit } from '@angular/core';

import { Options } from 'ng5-slider';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {


  transactions;
  
  form: FormGroup;
  phoneData: FormGroup;
  color: FormGroup;

  breadCrumbItems: Array<{}>;

  pricevalue = 250;
  minVal = 100;
  maxVal = 800;
  priceoption: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '$' + value;
    },
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      formlist: this.fb.array([]),
    }),
      this.phoneData = this.fb.group({
        phoneValue: this.fb.array([]),
    }),
    this.color = this.fb.group({
      colorValue: this.fb.array([]),
  });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Produtos' }, { label: 'Meus Produtos', active: true }];
    this.transactions = [
      {
        id: '#SK2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: 'Paid',
        payment: ['fab fa-cc-mastercard', 'Mastercard'],
        index: 1,
      },
      {
        id: '#SK2541',
        name: 'Jamal Burnett',
        date: '07 Oct, 2019',
        total: '$380',
        status: 'Chargeback',
        payment: ['fab fa-cc-visa', 'Visa'],
        index: 2,
      },
      {
        id: '#SK2542',
        name: 'Juan Mitchell',
        date: '06 Oct, 2019',
        total: '$384',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3,
      },
      {
        id: '#SK2543',
        name: 'Barry Dick',
        date: '05 Oct, 2019',
        total: '$412',
        status: 'Paid',
        payment: ['fab fa-cc-mastercard', 'Mastercard'],
        index: 4,
      },
      {
        id: '#SK2544',
        name: 'Ronald Taylor',
        date: '04 Oct, 2019',
        total: '$404',
        status: 'Refund',
        payment: ['fab fa-cc-visa', 'Visa'],
        index: 5,
      },
      {
        id: '#SK2545',
        name: 'Jacob Hunter',
        date: '04 Oct, 2019',
        total: '$392',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6,
      },
      {
        id: '#SK2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: 'Paid',
        payment: ['fab fa-cc-mastercard', 'Mastercard'],
        index: 1,
      },
      {
        id: '#SK2541',
        name: 'Jamal Burnett',
        date: '07 Oct, 2019',
        total: '$380',
        status: 'Chargeback',
        payment: ['fab fa-cc-visa', 'Visa'],
        index: 2,
      },
      {
        id: '#SK2542',
        name: 'Juan Mitchell',
        date: '06 Oct, 2019',
        total: '$384',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 3,
      },
      {
        id: '#SK2543',
        name: 'Barry Dick',
        date: '05 Oct, 2019',
        total: '$412',
        status: 'Paid',
        payment: ['fab fa-cc-mastercard', 'Mastercard'],
        index: 4,
      },
      {
        id: '#SK2544',
        name: 'Ronald Taylor',
        date: '04 Oct, 2019',
        total: '$404',
        status: 'Refund',
        payment: ['fab fa-cc-visa', 'Visa'],
        index: 5,
      },
      {
        id: '#SK2545',
        name: 'Jacob Hunter',
        date: '04 Oct, 2019',
        total: '$392',
        status: 'Paid',
        payment: ['fab fa-cc-paypal', 'Paypal'],
        index: 6,
      },
      {
        id: '#SK2540',
        name: 'Neal Matthews',
        date: '07 Oct, 2019',
        total: '$400',
        status: 'Paid',
        payment: ['fab fa-cc-mastercard', 'Mastercard'],
        index: 1,
      },];
  }
/**
   * Open modal
   * @param content modal content
   */
  field(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }
  colorField(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }
  formData(): FormArray {
    return this.form.get('formlist') as FormArray;
  }
  phonedata(): FormArray {
    return this.phoneData.get('phoneValue') as FormArray;
  }
  colordata(): FormArray {
    return this.color.get('colorValue') as FormArray;
  }
  phone(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }
  addPhone() {
    this.phonedata().push(this.phone());
  }
  deletePhone(i: number) {
    this.phonedata().removeAt(i);
  }
  addColor() {
    this.colordata().push(this.colorField());
  }
  deleteColor(i: number) {
    this.colordata().removeAt(i);
  }

  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
  removeField(i: number) {
      this.formData().removeAt(i);
  }
  addField() {
    this.formData().push(this.field());
  }
}
