import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './component/card/card.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { OrdersComponent } from './component/orders/orders.component';

import { BoardAdminComponent } from './component/board-admin/board-admin.component';
import { BoardUserComponent } from './component/board-user/board-user.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { EditOrderComponent } from './component/edit-order/edit-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'card', component: CardComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/edit', component: EditOrderComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
