import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {

    constructor(@Inject(DOCUMENT) private document: Document) {}

    switchTheme() {
		let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

        if (themeLink) {
			let isDarkMode = themeLink.href.includes('dark');
			isDarkMode = !isDarkMode;
			const theme = isDarkMode ? 'dark' : 'light';
            themeLink.href = `${theme}.css`;
        }
    }
}
