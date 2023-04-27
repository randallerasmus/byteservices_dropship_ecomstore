import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'platform', component: PlatformComponent,
  //   children: [
  //     { path: 'dashboard', component: DashboardComponent },
  //     { path: 'users', component: CreateUserComponent },
  //     { path: 'profile', component: ProfileComponent },
  //     { path: 'wagers', component: WagersComponent },
  //     { path: 'inbox', component: InboxComponent },
  //     { path: 'settings', component: SettingsComponent },
  //   ]},
  // { path: 'inbox', component: InboxComponent,
  //   children: [
  //     { path: 'Inbox', component: DashboardComponent },
  //     { path: 'Drafts', component: CreateUserComponent },
  //     { path: 'Sent Items', component: ProfileComponent },
  //     { path: 'Deleted Items', component: WagersComponent },
  //   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
