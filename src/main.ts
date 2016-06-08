// Imports for loading & configuring the in-memory web api
import {provide, enableProdMode} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {XHRBackend, HTTP_PROVIDERS} from "@angular/http";
import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
import {InMemoryDataService} from "./app/data/in-memory-data.service";
import {AppComponent, environment} from "./app";

import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
// The usual bootstrapping importss

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    MATERIAL_DIRECTIVES,
    MATERIAL_PROVIDERS,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    provide(XHRBackend, {useClass: InMemoryBackendService}), // in-mem server
    provide(SEED_DATA, {useClass: InMemoryDataService})     // in-mem server app.data

]);
