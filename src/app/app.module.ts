import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IConfig, MaskApplierService, NgxMaskModule} from "ngx-mask";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {BlockUIModule} from "ng-block-ui";
import {JwtInterceptor} from "./_helpers/jwt.interceptor";
import {ErrorInterceptor} from "./_helpers/error.interceptor";
import {ButtonModule} from "primeng/button";
import {TooltipModule} from "primeng/tooltip";

export const maskConfig: Partial<IConfig> | (() => Partial<IConfig>) | null = {
  validation: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(maskConfig),
    BrowserAnimationsModule,
    HttpClientModule,
    ToastModule,
    BlockUIModule.forRoot(),
    ButtonModule,
    TooltipModule
  ],
  providers: [
    MessageService,
    MaskApplierService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
