import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';


const routes: Routes = [
  {
    path: '', component: AccountDetailsComponent,
    data: { headerTitle: 'Open-project', pageTitle: 'Open-project' },
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
