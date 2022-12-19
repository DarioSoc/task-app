import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskAppRoutes } from '../shared/enums/TaskAppRoutes';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  {
    path: TaskAppRoutes.ListPage,
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
