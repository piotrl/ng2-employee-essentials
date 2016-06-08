/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-material': 'vendor/ng2-material',
  'angular2-in-memory-web-api': 'vendor/angular2-in-memory-web-api',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'moment': 'vendor/moment'
};

/** User packages configuration. */
const packages: string[]  = [
  'ng2-material',
  'angular2-in-memory-web-api',
  'ng2-bootstrap',
  'moment'
];

const materialPkgs: string[] = [
  'button',
  'card',
  'checkbox',
  'core',
  'sidenav',
  'toolbar',
  'list'
];

packages.forEach((packageName) => {
  packages[packageName] = {main: 'index'}
});
packages['moment'] = {main: 'moment'}


materialPkgs.forEach((pkg) => {
  packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/data'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
