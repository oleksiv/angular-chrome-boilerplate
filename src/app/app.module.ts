import {BrowserModule} from '@angular/platform-browser';
import {DoBootstrap, Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {ContentBoxComponent} from './content-box/content-box.component';
import {ContentBoxModule} from './content-box/content-box.module';

@NgModule({
  entryComponents: [
    ContentBoxComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentBoxModule
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {

  }

  ngDoBootstrap(app) {
    const contentBox = createCustomElement(ContentBoxComponent, {injector: this.injector});
    customElements.define('app-content-box', contentBox);

    if (document.getElementsByTagName('app-root').length) {
      app.bootstrap(AppComponent);
    }
  }
}
