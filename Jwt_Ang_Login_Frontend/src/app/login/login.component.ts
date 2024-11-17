import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { error } from 'console';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  successMessage = 'Successful login';
  errorMessage = 'Invalid Login';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router,private service : UserServiceService) {} // Router is from @angular/router

  handleLogin() {
    console.log("username: " + this.username);
    // if (this.username === 'kunti' && this.password === '123') {
    //   this.loginSuccess = true;
    //   this.router.navigate(['/welcome']); // Correct method to navigate
    // } else {
    //   this.invalidLogin = true;
    // }

    const param = {
      username: this.username,
      password: this.password
  };

  this.service.onClickLogin(param).subscribe(
    (res) => {
        console.log("Login Successfully");
    },
    (error) => {
        console.log("Login Failed", error);
    }
);




  }
  

}
