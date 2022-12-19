import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAppRoutes } from './modules/shared/enums/TaskAppRoutes';
import { AuthorizedGuard } from './modules/shared/guards/authorized.guard';
import { UnauthorizedGuard } from './modules/shared/guards/unauthorized.guard';

const routes: Routes = [
  { path: '', redirectTo: TaskAppRoutes.SignInPage, pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthorizedGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/task/task.module').then((m) => m.TaskModule),
    canActivate: [UnauthorizedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
