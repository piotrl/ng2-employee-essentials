// Imports for loading & configuring the in-memory web api
import {provide, enableProdMode} from "@angular/core";
import {XHRBackend, HTTP_PROVIDERS} from "@angular/http";
import {InMemoryBackendService, SEED_DATA} from "angular2-in-memory-web-api";
import {InMemoryDataService} from "./app/data/in-memory-data.service";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent, environment} from "./app";

// The usual bootstrapping importss

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: InMemoryBackendService}), // in-mem server
    provide(SEED_DATA, {useClass: InMemoryDataService})     // in-mem server app.data

]);
