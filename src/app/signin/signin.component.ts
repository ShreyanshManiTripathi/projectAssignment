import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
// import { Window } from '@angular/common';;
import { Inject } from '@angular/core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {


  constructor(public router: Router){}

  //navigation link.
  // constructor(@Inject(Window) private document: Document){}



  openForm() {
    const open=  <HTMLInputElement> document.getElementById("myForm")
    open.style.display = "block";
    console.log('hi')
  }
  
   closeForm() {
    const close= <HTMLInputElement>document.getElementById("myForm")
    close.style.display = "none";

  }



  logIn(){
    const uname1 = <HTMLInputElement>document.getElementById("user")
    const uname=uname1.value
    
        const pword1 = <HTMLInputElement>document.getElementById('pwd')
        const pword=pword1.value
    
        const close= <HTMLInputElement>document.getElementById("myForm")
        

        if (uname == '' || uname == null) {
            alert("Enter Username")
        }
        if (uname !== '123@gmail.com' ) {
          alert('Wrong username ')
      }
    
         if (pword == '' || pword == null) {
            alert('Enter Password')
        }
       
        else if( pword !== 'hiuser'){
                            
          alert('Wrong password ')
      }

         if (uname === '123@gmail.com' && pword === 'hiuser') {
            alert('log in successful')
            this.router.navigate(['loggedin']);
            // this.document.location.href = 'https://www.google.com'
            close.style.display = "none";
        }
    
  }

}
