import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
	isDarkMode: boolean = false;

	constructor(
		private _themeService: ThemeService
	) { }

	ngOnInit(): void {
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
