import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { KiwiSaverComponent } from './kiwi-saver/kiwi-saver.component';
import { FinancialGstComponent } from './financial-gst/financial-gst.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: KiwiSaverComponent,
      },
      {
        path: 'kiwi-saver',
        component: KiwiSaverComponent,
      },
      {
        path: 'financial-and-gst',
        component: FinancialGstComponent,
      },
      
      {
        path: 'financial-and-gst',
        component: FinancialGstComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    KiwiSaverComponent,
    FinancialGstComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule { }
