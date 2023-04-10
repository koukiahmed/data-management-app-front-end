import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RouterModule } from '@angular/router';
import { LogoutAdminComponent } from './logout-admin/logout-admin.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ActualityAdminComponent } from './actuality-admin/actuality-admin.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { LibraryAdminComponent } from './library-admin/library-admin.component';
import { LinksAdminComponent } from './links-admin/links-admin.component';
import { MailComponent } from './mail/mail.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AdminComponent,
    LoginAdminComponent,
    LogoutAdminComponent,
    HomeAdminComponent,
    ActualityAdminComponent,
    DocumentAdminComponent,
    LibraryAdminComponent,
    LinksAdminComponent,
    MailComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class AdminModule { }
