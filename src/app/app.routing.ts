import {Routes, RouterModule} from '@angular/router/esm';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
/**
 * Root routing table
 */
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
