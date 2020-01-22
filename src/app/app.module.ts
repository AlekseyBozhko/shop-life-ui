import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { NavbarComponent } from './Components/Header/navbar/navbar.component';
import { SidebarComponent } from './Components/SideNavigation/sidebar/sidebar.component';
import { MainComponent } from './Components/Pages/main/main.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegistrationComponent } from './Components/Pages/registration/registration.component';
import { ItemsPageComponent } from './Components/Pages/items-page/items-page.component';
import { AddItemComponent } from './Components/Pages/add-item/add-item.component';
import { PersonalKabinetComponent } from './Components/Pages/personal-kabinet/personal-kabinet.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    MainComponent,
    LoginComponent,
    RegistrationComponent,
    ItemsPageComponent,
    AddItemComponent,
    PersonalKabinetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
