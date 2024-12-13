import { Inject, InjectionToken } from "@angular/core";

export const BROWSER_STORAGE = new InjectionToken<Storage>('BrowserStorage', {
    // Untuk Menyimpan JWT dalam local storage browser
    providedIn: 'root',
    factory: () => localStorage
});
