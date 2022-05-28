import { Component, OnInit } from '@angular/core';
import { SelectModel } from 'src/app/component/search-bar/select.model';
import { Categories } from 'src/app/core/Model/categories.model';
import { DropdownService } from 'src/app/core/services/dropdown.service';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	isDarkMode: boolean = false;
	mainCategoriesOptions: SelectModel[];
	categoriesOptions: Categories;


	constructor(
		private _themeService: ThemeService,
		private _dropdownService: DropdownService,
	) { }

	ngOnInit(): void {
		this.getAllCategoriesOptions();
	}

	private getAllCategoriesOptions(): void {
		this._dropdownService.getAllCategoriesData().subscribe(
			option => {
				this.categoriesOptions = option;
				console.log(option);
			}
		)
		this._dropdownService.getAllCategoriesType().subscribe(
			option => {
				this.mainCategoriesOptions = option;
			}
		)
	}

	toggleThemeMode(): void {
		this._themeService.switchTheme();
		this.isDarkMode = ! this.isDarkMode;
	}

	preventDefault($event: MouseEvent) {
		// $event.preventDefault();
		// return false;
		console.log($event.defaultPrevented);

	}

}
