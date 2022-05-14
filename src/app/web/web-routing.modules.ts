import { Routes } from '@angular/router';
import { ProductListComponent } from 'src/app/web/product-list/product-list.component';
import { WebComponent } from 'src/app/web/web.component';

export const webroutes: Routes = [
	{ path: '', component: WebComponent, children: [
		{ path: '', component: ProductListComponent }

	]},
];

