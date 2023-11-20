import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { BookListingComponent } from './customer/book-listing/book-listing.component';
import { ListingComponent } from './dashboard/listing/listing.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { AddComponent } from './dashboard/add/add.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'admin-login', component: LoginAdminComponent},
  { path: 'dashboard', component: ListingComponent,canActivate: [AuthGuard] },
  { path: 'books/edit/:id', component: EditComponent,canActivate: [AuthGuard] },
  { path: 'books/add', component: AddComponent,canActivate: [AuthGuard] },
  { path: '', component: BookListingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
