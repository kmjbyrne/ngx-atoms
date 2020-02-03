import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomMenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { GroupComponent } from './group/group.component';

@NgModule({
    declarations: [AtomMenuComponent, MenuItemComponent, SubmenuComponent, GroupComponent],
    imports: [
        CommonModule
    ],
    exports: [
        AtomMenuComponent
    ]
})
export class MenuModule { }
