import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { platformCoreDynamic } from '@angular/platform-browser-dynamic/src/platform_core_dynamic';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  FirstName="Cody";
  LastName="Netshituka";
  Contact="0716318309";
  ID="9411250433083";
  Email="khodani1994@gmail.com";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onRegister()
  {
    this.router.navigateByUrl("login")
  }
}
