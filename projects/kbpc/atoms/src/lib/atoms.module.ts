import { NgModule } from '@angular/core';
import { AtomsComponent } from './atoms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [AtomsComponent, NavbarComponent, HeaderComponent, SidenavbarComponent],
  imports: [
  ],
  exports: [AtomsComponent]
})
export class AtomsModule { }
