import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet],
 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = 'kunti';
  password = '123';
  successMessage = 'Successful login';
  errorMessage = 'Invalid Login';
  invalidLogin = false;
  loginSuccess = false;

  constructor(private router: Router) {} // Router is from @angular/router

  handleLogin() {
    console.log("username: " + this.username);
    if (this.username === 'kunti' && this.password === '123') {
      this.loginSuccess = true;
      this.router.navigate(['/welcome']); // Correct method to navigate
    } else {
      this.invalidLogin = true;
    }

  }
  

}
