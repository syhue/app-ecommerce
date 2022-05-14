import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentModule } from 'src/app/component/component.module';
import { ProductListComponent } from 'src/app/web/product-list/product-list.component';
import { webroutes } from 'src/app/web/web-routing.modules';
import { WebComponent } from 'src/app/web/web.component';


@NgModule({
	declarations: [
		WebComponent,
		ProductListComponent
	],
	imports: [
		CommonModule,
		RouterModule.forRoot(webroutes),
		ComponentModule
	]
})
export class WebModule { }
