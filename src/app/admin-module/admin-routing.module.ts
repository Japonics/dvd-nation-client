import {Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/components/dashboard/dashboard.component';
import {GamesManagementOutletComponent} from './components/games/components/games-management-outlet/games-management-outlet.component';
import {
  CategoriesManagementOutletComponent
} from './components/categories/components/categories-management-outlet/categories-management-outlet.component';
import {NotFoundComponent} from '../@theme/components/not-found/not-found.component';
import {UsersManagementOutletComponent} from './components/users/components/users-management-outlet/users-management-outlet.component';
import {OrdersManagementOutletComponent} from './components/orders/components/orders-management-outlet/orders-management-outlet.component';
import {GamesManageListComponent} from './components/games/components/games-manage-list/games-manage-list.component';
import {CategoriesManageListComponent} from './components/categories/components/categories-manage-list/categories-manage-list.component';

export const ADMIN_ROUTING_MODULE: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'games',
    component: GamesManagementOutletComponent,
    children: [
      {
        path: '',
        component: GamesManageListComponent
      }
    ]
  },
  {
    path: 'categories',
    component: CategoriesManagementOutletComponent,
    children: [
      {
        path: '',
        component: CategoriesManageListComponent
      },
    ]
  },
  {
    path: 'users',
    component: UsersManagementOutletComponent,
    children: []
  },
  {
    path: 'orders',
    component: OrdersManagementOutletComponent,
    children: []
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];