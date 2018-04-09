import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { ProductModule } from './products/product.module'; // assume this is as a features module.

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent, WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    ProductModule, // use this as a features module
    RouterModule.forRoot(
      [
        {path: 'welcome', component: WelcomeComponent},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default path
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // if requested path is not matched then it will redirtect wild card path.
      ])  // , {useHash: true} for hash style routes

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
