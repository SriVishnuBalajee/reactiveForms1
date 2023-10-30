import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveForms1';
  userList:any[]=[];
  addUser(){
    if(this.UserData.valid){
      console.log(this.UserData.value);
      this.userList.push(this.UserData.value);
      console.log(this.userList);
    }
    else{
      console.log("invalid");
    }

  }
  
  UserData = new FormGroup({
    firstname: new FormControl("unknown",[Validators.maxLength(26),Validators.minLength(3),Validators.required]),
    lastname: new FormControl("unknown",[Validators.maxLength(26),Validators.minLength(3),Validators.required]),
    salary: new FormControl("unknown",[Validators.max(2600000),Validators.min(3000),Validators.required]),
    DateofJoin: new FormControl("16-10-2001",[Validators.required]),
  },
  {
    updateOn:'change'
  }
  );
}
