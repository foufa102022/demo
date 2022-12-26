import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppareilsComponent } from './appareils/appareils.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component:AppareilsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'Appareils', component: AppareilsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
