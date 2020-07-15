import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule} from '../home/home-routing.module'
import { HomeComponent } from './component/home/home.component';
import { UiCustomizeModule } from '../ui-customize/ui-customize.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UiCustomizeModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
