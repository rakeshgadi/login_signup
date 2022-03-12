import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

  logIn(){
    this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      let x;
      const user=res.find((a:any)=>{
        if(a.email === this.loginForm.value.email && a.password ===this.loginForm.value.password && a.user1==0 && a.user1!='')
        {
          x=0;
          return x;
        }
        else if(a.email === this.loginForm.value.email && a.password ===this.loginForm.value.password && a.user1==1)
        {
          x=1;
          return x;
        }
        else if(a.email === this.loginForm.value.email && a.password ===this.loginForm.value.password && a.user1==2)
        {
          x=2;
          return x;
        }
        else {
          return false
        }
      }
      )
      if(x==0)
      {
        alert("Login is successful");
        this.loginForm.reset();
        this.router.navigate(['customerdash']);
      }
      else if(x==1)
      {
        alert("Login is successful");
        this.loginForm.reset();
        this.router.navigate(['shopdash']);
      }
      else if(x==2)
      {
        alert("Login is successful");
        this.loginForm.reset();
        this.router.navigate(['admindash']);
      }
      else{
        alert("Incorrect username or password");
      }
      },err=>{
        alert("Something went wrong, try again later!");
      }
    )
  }

}
