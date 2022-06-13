import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TitleBarMenuComponent } from './title-bar-menu/title-bar-menu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    NewsLetterComponent,
    ContactUsComponent,
    TitleBarMenuComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    ContactUsComponent,
    TitleBarMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
