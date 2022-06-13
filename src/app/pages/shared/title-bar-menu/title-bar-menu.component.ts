import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar-menu',
  templateUrl: './title-bar-menu.component.html',
  styleUrls: ['./title-bar-menu.component.scss']
})
export class TitleBarMenuComponent implements OnInit {

  @Input()
  menuItems: MenuItem[] = [];

  @Output()
  navigatePage = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit(): void {
  }

  

}

export interface MenuItem {
  url: string
  label: string,
  isActive: boolean
}
