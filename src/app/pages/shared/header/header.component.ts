import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


    @Input() 
    title: any = 'Lorem ipsum dolor sit amet';

    @Input()
    subtitle: any = 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

    @Input()
    blogItem: BlogItem[]= [
    {
      url: '',
      label: 'KiwiSaver HomeStart grant explained'
    },
    {
      url: '',
      label: "What's happening in the property market?"
    },
    {
      url: '/home/testimonials',
      label: "Trust law reform"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface BlogItem {
  url: string
  label: string
}