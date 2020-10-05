import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'pets-app';

  constructor(private router: Router){}

  goDogs(){
    this.router.navigate(['dogs'])
  }

  gocats(){
    this.router.navigate(['cats'])
  }

  goBirds(){this.router.navigate(['birds'])}

}
