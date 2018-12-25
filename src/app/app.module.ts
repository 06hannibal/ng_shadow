import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule, MatInputModule, MatIconModule } from '@angular/material';
import { ProductService } from './product.service';
import { VariationService } from './variation.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from './messages.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, VariationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
