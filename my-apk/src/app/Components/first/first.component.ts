import { Component } from '@angular/core';

// the component is a decorator
// a decorator starts with the @
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  // getColor(){
  //   return this.btn ? 'red':'green'
  // }

  constructor() {
    setTimeout(() => {
      this.isdisabled = false;
    }, 1000);
    this.btn = true;
  }
  name = 'Ghanasham Rajaram Salunkhe';
  mis = 111903033;
  isdisabled = true;
  classes = 'btn btn-success btn-lg';
  status = 'no server is yet created';
  value = 'blah blah blah';
  username = '';
  btn = true;
  className = 'first';

  data = [
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
    { name: 'ghansham', mis: 111903033, div: 1 },
  ];
  ngOnInit() {}
  // invoke a function when need arised
  OnClickEventFunction(event: any) {
    console.log('clicked 1');
    console.log(event);
    setTimeout(() => (this.status = 'serve is now active'), 2000);
  }

  InputListener(event: any) {
    console.log(event.target.value);
    this.value = event.target.value;
  }

  someFunc() {
    console.log(this.username);

    if (this.username != '') {
      this.btn = false;
    } else {
      this.btn = true;
    }
  }
  buttonClicked() {
    this.username = '';
    this.btn = true;
  }
}
