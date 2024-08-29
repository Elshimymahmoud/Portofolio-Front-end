import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact-me/contact-me.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillsComponent } from './pages/skills/skills.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import {  dashbardContactsComponent } from './dashboard/contacts/contacts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashheaderComponent } from './dashboard/dashheader/dashheader.component';

import { EditAboutComponent } from './dashboard/edit-about/edit-about.component';
import{dashbardSkillsComponent}from './dashboard/skills/skills.component';
import { AddSkillsComponent } from './dashboard/add-skills/add-skills.component';
import { DashboardProjectsComponent } from './dashboard/projects/projects.component';

import{dashbardAboutComponent}from './dashboard/about/about.component';

import { DeleteSkillsComponent } from './dashboard/delete-skills/delete-skills.component';
import { AddProjectComponent } from './dashboard/add-project/add-project.component';
import { EditProjectComponent } from './dashboard/edit-project/edit-project.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardProjectsComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    dashbardContactsComponent,
    DashheaderComponent,
    dashbardAboutComponent,
    EditAboutComponent,
    dashbardSkillsComponent,
    AddSkillsComponent,
    DeleteSkillsComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  providers: [provideClientHydration(), provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
