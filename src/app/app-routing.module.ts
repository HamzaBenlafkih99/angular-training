import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditClientsComponent } from './components/edit-clients/edit-clients.component';
import { LoginComponent } from './components/login/login.component';
import { RegistreComponent } from './components/registre/registre.component';
import { SettingsComponent } from './components/settings/settings.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
//import { ClientsComponent } from './components/clients/clients.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddClientsComponent } from './components/add-clients/add-clients.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'client/add', component: AddClientsComponent },
  { path: 'client/edit/:id', component: EditClientsComponent },
  { path: 'client/:id', component: ClientDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
