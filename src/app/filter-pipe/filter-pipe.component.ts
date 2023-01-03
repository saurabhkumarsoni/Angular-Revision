import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

  constructor() { }

  nameSearch: string = '';

  productArray =[
    {
      id: 1,
      name: 'Television',
      price: '70000 RS',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Mobile (Samsung)',
      price: '67000 RS',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Washing Machine (LG)',
      price: '24900 RS',
      availability: 'Not Available'
    },
    {
      id: 4,
      name: 'Desktop (HP)',
      price: '23000 RS',
      availability: 'Available'
    },
    {
      id: 5,
      name: 'Tablet (Apple)',
      price: '50000 RS',
      availability: 'Not Available'
    },
    {
      id: 6,
      name: 'Gysere (Bajaj)',
      price: '50000 RS',
      availability: 'Available'
    },
    {
      id: 7,
      name: 'Gas Stove (GreenChef)',
      price: '4000 RS',
      availability: 'Available'
    },
    {
      id: 8,
      name: 'Tablet (Samsumg)',
      price: '60000 RS',
      availability: 'Available'
    },
  ]

  ngOnInit(): void {
  }


  onAddProduct(valueAdded: any){
    console.log(valueAdded.value)
    this.productArray.push({
      id: 9,
      name: valueAdded.value,
      price: '60000 RS',
      availability: 'Available'
    })

  }

}
