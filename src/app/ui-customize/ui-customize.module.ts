import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { UiFooter001Component } from './component/ui-footer001/ui-footer001.component';
import { UiMap001Component } from './component/ui-map001/ui-map001.component';
import { UiHeader001Component } from './component/ui-header001/ui-header001.component';
import { UiNav001Component } from './component/ui-nav001/ui-nav001.component';
import { UiSlider001Component } from './component/ui-slider001/ui-slider001.component';
import { UiNavList001Component } from './component/ui-nav-list001/ui-nav-list001.component';
import { UiContentProject001Component } from './component/ui-content-project001/ui-content-project001.component';
import { UiTitle001Component } from './component/ui-title001/ui-title001.component';
import { UiContentInfo001Component } from './component/ui-content-info001/ui-content-info001.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  slideVisibleClass: 'visible'
};

@NgModule({
  declarations: [UiFooter001Component, UiMap001Component, UiHeader001Component, UiNav001Component, UiSlider001Component, UiNavList001Component, UiContentProject001Component, UiTitle001Component, UiContentInfo001Component],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports:  [UiFooter001Component, UiMap001Component, UiHeader001Component, UiNav001Component, UiSlider001Component, UiNavList001Component, UiContentProject001Component, UiTitle001Component, UiContentInfo001Component],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    }]
})
export class UiCustomizeModule { }
