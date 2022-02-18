import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/login/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLoggedIn = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.$isLoggedIn.subscribe((state)=>{this.isLoggedIn=state; console.log("MENU STATE" + this.isLoggedIn) }); 
    console.log('menu ->' + this.isLoggedIn);
  }


  handleLogout() {
    this.AuthService.logout();
  }

}
