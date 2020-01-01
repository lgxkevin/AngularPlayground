import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from '../app/app.routing';

// Customized modules

// Components
import { AppComponent } from './app.component';
import { ContentComponent } from './shared/Content/Content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
