import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm: FormGroup | any;

  notAllowedName = ['saurabh', 'sonali']

  constructor(private fb: FormBuilder) { }

  get f() {
    return this.myReactiveForm.controls;
  }

  

  ngOnInit(): void {

    this.myReactiveForm = this.fb.group({
      username: [null,[Validators.required, this.notAllowedUser.bind(this)]],
      email: [null, [Validators.required]],
      course: [null, []],
      gender: [null, []],
      message: [null, []],
      skills: this.fb.array(['']),
      address: this.fb.group({
        street: ['',],
        city: ['',],
        state: ['',],
        postalcode: ['',],
        country: ['',]
      })
    })

    // this.myReactiveForm.valueChanges.subscribe((value: any) =>{
    //   console.log(value)
    // })

    // this,this.myReactiveForm.statusChanges.subscribe((value: any) =>{
    //   console.log(value);
    // })
  }

  submitData(){
    console.log('form Vlaue', this.myReactiveForm);
  }

  addSkills(){
    this.f['skills'].push(this.fb.control(''))
  }

  notAllowedUser(control: FormControl){
    if(this.notAllowedName.indexOf(control.value) !== -1){
      return {'userNameNotAllowed': true}
    }
    return null;

  }

}
