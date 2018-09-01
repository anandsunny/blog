import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { VideoComponent } from './video/video.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { NavbarComponent } from './inc/header/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatTabsModule,
  MatGridListModule,
  MatIconModule,
  MatBadgeModule,
  MatCardModule
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { SideNavbarComponent } from './inc/side-navbar/side-navbar.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

import { HttpClientModule } from '@angular/common/http'
import { DragScrollModule } from 'ngx-drag-scroll'
import { NgxPaginationModule } from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechComponent,
    VideoComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideNavbarComponent,
    SingleBlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
    MatCardModule,
    DragScrollModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
