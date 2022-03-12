import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder , FormGroup ,Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      user1:new FormControl('',Validators.required),
      email:new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      username:new FormControl('',[Validators.required,Validators.minLength(4)]),
      mobileNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
    }

    get user1(){return this.signupForm.get('user1')}
    get email(){return this.signupForm.get('email')}
    get username(){return this.signupForm.get('username')}
    get mobileNumber(){return this.signupForm.get('mobileNumber')}
    get password(){return this.signupForm.get('password')}

    signUp(){
      if(!this.signupForm.valid){
        return false;
      }
      else{
      this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
        alert("Registration Successful");
        this.signupForm.reset();
        this.router.navigate(['login'])
      },err=>{
        alert("Something went wrong , try again later")
      })
      return true
    }
      
    }
  }
  
