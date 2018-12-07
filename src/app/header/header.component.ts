import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    angular = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
    name_site = 'Shadow';
    home = 'Home';
    about = 'About';
    contact = 'Contact';
    login = 'Login';

  constructor() { }

  ngOnInit() {
  }

}
