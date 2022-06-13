import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserContact } from 'src/app/core/model/UserContact';
import { UserService } from 'src/app/core/services/UserServices';
import { MenuItem } from '../shared/title-bar-menu/title-bar-menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactUsList = [];
  menuItems: MenuItem[] = [
    {
      isActive: true,
      label: 'KiwiSaver advice',
      url: 'kiwi-saver'
    },
    {
      isActive: false,
      label: 'Financial & GST',
      url: 'financial-and-gst'
    }
    ,
    {
      isActive: false,
      label: 'Book keeping & payroll',
      url: ''
    }
    ,
    {
      isActive: false,
      label: 'Insuring People',
      url: 'insuring-people'
    }
  ]
  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit() {
      this.contactUsList = await await this.userService.getContacts().toPromise();
      let currentUrl = this.router && this.router.url ? this.router.url.split('/') : []; 
      if(currentUrl && currentUrl.length >= 3) {
        this.menuItems = this.menuItems.map((data)=>{ data.isActive = data.url == currentUrl[2]; return data; });
      } else {
        this.menuItems[0].isActive = true; 
      }
  }

  async sendContact(userContact: UserContact) {
    let res = await this.userService.postContact(userContact).toPromise();
    if(res) {
      console.log(res);
      alert(res.toString());
    }
  }

  navigatePage(menu: MenuItem) {
    this.menuItems = this.menuItems.map((data)=> { data.isActive = false; if( data.label == menu.label ) { data.isActive = true; }  return data; });
    this.router.navigateByUrl('/home/' + menu.url)
  }

}
