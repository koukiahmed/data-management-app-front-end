import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ActualityComponent } from './actuality/actuality.component';
import { LinksComponent } from './links/links.component';
import { LibraryComponent } from './library/library.component';
import { AdminModule } from './admin/admin.module';
import { LogoutComponent } from './logout/logout.component';
import { DocumentComponent } from './document/document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ActualitiesService } from './services/actualities.service';
import { DocumentsService } from './services/documents.service';
import { LibrariesService } from './services/libraries.service';
import { LinksService } from './services/links.service';
import { LoginService } from './services/login.service';
import { MailsService } from './services/mails.service';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    ActualityComponent,
    LinksComponent,
    LibraryComponent,
    LogoutComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ActualitiesService,
    DocumentsService,
    LibrariesService,
    LinksService,
    LoginService,
    MailsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
