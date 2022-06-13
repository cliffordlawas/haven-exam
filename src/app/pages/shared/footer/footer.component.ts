import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  menuItem: MenuItem[]= [
    {
      url: '/home',
      label: 'Home'
    },
    {
      url: '/home/our-services',
      label: 'Services'
    },
    {
      url: '/home/testimonials',
      label: 'Testimonials'
    },
    {
      url: '/home/blog',
      label: 'Blog'
    },
    {
      url: '/home/contact-us',
      label: 'Contact Us'
    }
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

}


export interface MenuItem {
  url: string
  label: string
}