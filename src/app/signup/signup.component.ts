import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  openForm() {
    const open=  <HTMLInputElement> document.getElementById("myForm")
    open.style.display = "block";
    console.log('hi')
  }
  
   closeForm() {
    const close= <HTMLInputElement>document.getElementById("myForm")
    close.style.display = "none";
  }
  
}
