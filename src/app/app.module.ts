import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ActualityComponent } from './actuality/actuality.component';
import { LinksComponent } from './links/links.component';
import { AdminModule } from './admin/admin.module';
import { LogoutComponent } from './logout/logout.component';
import { DocumentComponent } from './document/document.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ActualitiesService } from './services/actualities.service';
import { DocumentsService } from './services/documents.service';
import { LinksService } from './services/links.service';
import { UsersService } from './services/users.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { FolderComponent } from './folder/folder.component';
import { FoldersService } from './services/folders.service';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ActualityBodyComponent } from './actuality-body/actuality-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    ActualityComponent,
    LinksComponent,
    LogoutComponent,
    DocumentComponent,
    RegisterComponent,
    FolderComponent,
    ActualityBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
