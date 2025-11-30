import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { CssHighlighterDirective } from './shared/directives/cssHighHighliter.directives';
import { RenderCssHighDirective } from './shared/directives/render-css-high.directive';
import { ToLowercaseDirective } from './shared/directives/to-lowercase.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductDashboardComponent,
    CssHighlighterDirective,
    RenderCssHighDirective,
    ToLowercaseDirective,
    CreditCardDirective,
   
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
