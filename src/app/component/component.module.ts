import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MenuComponent } from 'src/app/component/menu/menu.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
	declarations: [
		MenuComponent,
		SearchBarComponent
	],
	imports: [
		CommonModule,
		DropdownModule,
		FormsModule
	],
	exports: [
		MenuComponent
	]
})
export class ComponentModule { }
