import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  itemsList= [] as any;
  employees = [
    {
      id: 1,
      name: 'saurabh',
      mobile: '90987658',
      email: 'sk@gmail.com',
      department: 'Salesforce',
      salary: 980000,
    },
    {
      id: 2,
      name: 'suman',
      mobile: '90987658',
      email: 'sk@gmail.com',
      department: 'Salesforce',
      salary: 99000,
    },
    
    {
      id: 3,
      name: 'sonali',
      mobile: '90987658',
      email: 'sk@gmail.com',
      department: 'Salesforce',
      salary: 30000,
    },
    
    {
      id: 4,
      name: 'ankiur',
      mobile: '90987658',
      email: 'sk@gmail.com',
      department: 'Salesforce',
      salary: 45000,
    },
    
    
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  dynamicArray = [{
    name: '',
    mobile: '',
     email: '' ,
      salary: ''
  }];

  addRow() {
    this.dynamicArray.push(
      { 
        name: '',
       mobile: '',
        email: '' ,
         salary: ''
        });
    console.log('New row added successfully', 'New Row');
    if(this.dynamicArray.length>0){
      this.router.navigate(['features'])
    }
  }
  deleteRow(index: any) {
    this.dynamicArray.splice(index, 1);
  }
  getValues() {
    console.log(this.dynamicArray);
    this.dynamicArray;
  }

  deleteItem(index: any){
    console.log(index)
    this.dynamicArray.splice(index, 1);
  }

 

}
