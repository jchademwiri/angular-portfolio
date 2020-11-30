import { ContactComponent } from './components/contact/contact.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
