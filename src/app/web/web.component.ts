import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-web',
	templateUrl: './web.component.html',
	styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

	menuItems: MenuItem[];

	constructor() { }

	ngOnInit(): void {
	}

}
