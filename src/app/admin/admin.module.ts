import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ActualityAdminComponent } from './actuality-admin/actuality-admin.component';
import { DocumentAdminComponent } from './document-admin/document-admin.component';
import { LinksAdminComponent } from './links-admin/links-admin.component';
import { FolderAdminComponent } from './folder-admin/folder-admin.component';
import { EmailComponent } from './email/email.component';
import { MaterialModule } from '../material/material.module';
import { ActualityAddComponent } from './actuality-add/actuality-add.component';
import { ActualityUpdateComponent } from './actuality-update/actuality-update.component';
import { ActualityDeleteComponent } from './actuality-delete/actuality-delete.component';
import { DocumentAddComponent } from './document-add/document-add.component';
import { DocumentUpdateComponent } from './document-update/document-update.component';
import { DocumentDeleteComponent } from './document-delete/document-delete.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { FolderAddComponent } from './folder-add/folder-add.component';
import { LinkAddComponent } from './link-add/link-add.component';
import { LinkUpdateComponent } from './link-update/link-update.component';
import { LinkDeleteComponent } from './link-delete/link-delete.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    ActualityAdminComponent,
    DocumentAdminComponent,
    LinksAdminComponent,
    UsersAdminComponent,
    FolderAdminComponent,
    EmailComponent,
    ActualityAddComponent,
    ActualityUpdateComponent,
    ActualityDeleteComponent,
    DocumentAddComponent,
    DocumentUpdateComponent,
    DocumentDeleteComponent,
    EmailSendComponent,
    FolderAddComponent,
    LinkAddComponent,
    LinkUpdateComponent,
    LinkDeleteComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDeleteComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})

export class AdminModule { }
