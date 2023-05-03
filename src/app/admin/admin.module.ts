import { HttpClientModule } from '@angular/common/http';
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
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ActualitiesService } from '../services/actualities.service';
import { DocumentsService } from '../services/documents.service';
import { LinksService } from '../services/links.service';
import { UsersService } from '../services/users.service';
import { FoldersService } from '../services/folders.service';
import { EmailService } from '../services/email.service';

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

  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ActualitiesService,
    DocumentsService,
    LinksService,
    UsersService,
    FoldersService,
    EmailService
  ],
})

export class AdminModule { }
