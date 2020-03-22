import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'
import { AuthGuard } from './core/auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'homework',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./homework/homework.module').then(m => m.HomeworkModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: '**', canActivate: [AuthGuard], component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
