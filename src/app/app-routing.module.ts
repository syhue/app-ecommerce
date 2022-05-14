import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('src/app/web/web.module').then(m => m.WebModule)
	},
	{
		path: 'auth',
		loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
	}
];

