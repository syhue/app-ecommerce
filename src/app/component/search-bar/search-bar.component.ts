import { Component, OnInit } from '@angular/core';
import { SelectModel } from 'src/app/component/search-bar/select.model';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

	cities = [
		{ name: 'New York', code: 'NY' },
		{ name: 'Rome', code: 'RM' },
		{ name: 'London', code: 'LDN' },
		{ name: 'Istanbul', code: 'IST' },
		{ name: 'Paris', code: 'PRS' }
	];
	selectedCity: SelectModel;
	searchValue: string = '';


	constructor() { }

	ngOnInit(): void {
	}

}

