import { Component } from '@angular/core';

// Command to add Nebular JS: ng add @nebular/theme
// Command to update Angular CLI: npm install -g @angular/cli@latest
// Nebular Color Theme File Location: themes.scss
// Command to add Angular PWA Extension for Transforming the Application into PWA: ng add @angular/pwa
// Command to Build Production Application: ng build myapp
// Command to Add Firebase: ng add @angular/fire
// Command to Deploy Application (to the specified place (eg. Firebase) if configured previously) (will give hosting URL): ng deploy
// If Firebase Project List Failed to Display: use the command 'firebase login --reauth' to try relogging and see 

// PWA (Progressive Web Application) can be installed by going to the hosted site URL and clicking "Install" to Desktop

// To install all the Node Modules from the package.json, simple use the command "npm install / npm i"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
}
