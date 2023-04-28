import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ActualityAdminComponent } from './actuality-admin/actuality-admin.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { LinksAdminComponent } from './links-admin/links-admin.component';
import { ProfileComponent } from './profile/profile.component';
import { FolderAdminComponent } from './folder-admin/folder-admin.component';
import { EmailComponent } from './email/email.component';



@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    ActualityAdminComponent,
    DocumentAdminComponent,
    LinksAdminComponent,
    ProfileComponent,
    FolderAdminComponent,
    EmailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class AdminModule { }
