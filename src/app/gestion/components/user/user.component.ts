import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../model/user';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  public editUser: User = {userName:"", prenom:"", email:"", id:"", password:""};
  public deleteUser: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void{
    this.userService.getUser().subscribe(
      (response: User[] ) => {
        this.users = response;
    console.log(this.users);
  },
  (error: HttpErrorResponse) => {
alert(error.message);
}
);
}

public onAddUser(addForm: NgForm): void {
  document.getElementById('add-user-form').click();
  this.userService.addUser(addForm.value).subscribe(
    (response: User) => {
      console.log(response);
      this.getUser();
      addForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  );
}

public onUpdateUser(user: User): void {
  this.userService.updateUser(user).subscribe(
    (response: User) => {
      console.log(response);
      this.getUser();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
  OndeleteUser(userID: String): void {
    this.userService.deleteUser(userID).subscribe(
      (response: void) => {
        console.log(response);
        this.getUser();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchUser(key: string): void {
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (user.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUser();
    }
  }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteUserModal');
    }
    container.appendChild(button);
    button.click();
  }


}
