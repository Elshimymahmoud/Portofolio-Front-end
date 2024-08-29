import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent}from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component';
import {DashboardComponent } from './dashboard/home/home.component';

import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact-me/contact-me.component';
import { dashbardAboutComponent } from './dashboard/about/about.component';
import { dashbardSkillsComponent } from './dashboard/skills/skills.component';
import { DashboardProjectsComponent } from './dashboard/projects/projects.component';
import { dashbardContactsComponent } from './dashboard/contacts/contacts.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/about', component: dashbardAboutComponent},
  { path: 'dashboard/skills', component: dashbardSkillsComponent},
  { path: 'dashboard/projects', component: DashboardProjectsComponent},
  { path: 'dashboard/contacts', component: dashbardContactsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
