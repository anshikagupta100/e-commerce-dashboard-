import { Routes } from '@angular/router';
import { FrameComponent } from './layout/frame/frame';
import { Dashboard} from './pages/dashboard/dashboard';
import { Analytics} from './pages/analytics/analytics';
import { Products} from './pages/products/products';
import { Inventory} from './pages/inventory/inventory';
import { Orders} from './pages/orders/orders';
import { Customers} from './pages/customers/customers';
import { Coupons} from './pages/coupons/coupons';

export const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      { path: 'dashboard', component: Dashboard},
      { path: 'analytics', component: Analytics},
      { path: 'products', component: Products},
      { path: 'inventory', component: Inventory},
      { path: 'orders', component: Orders},
      { path: 'customers', component: Customers},
      { path: 'coupons', component: Coupons},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];