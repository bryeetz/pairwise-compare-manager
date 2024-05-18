import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';

import { NavigationBarComponent } from './components/main/navigation-bar/navigation-bar.component';
import { StaticTextComponent } from './components/static/static-text/static-text.component';
import { CompareSpaceComponent } from './components/main/compare-space/compare-space.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    StaticTextComponent,
    CompareSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    CardModule,
    SplitterModule,
    DividerModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
