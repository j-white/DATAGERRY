/*
* dataGerry - OpenSource Enterprise CMDB
* Copyright (C) 2019 NETHINKS GmbH
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './components/breadcrumb/breadcrumb.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarCategoryComponent } from './components/sidebar/sidebar-category.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ActiveBadgeComponent } from './helpers/active-badge/active-badge.component';
import { LowercaseDirective } from './directives/lowercase.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './components/table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { ToastContainerComponent } from './helpers/toast/toast-container.component';

@NgModule({
  declarations: [
    BreadcrumbComponent,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
    SidebarCategoryComponent,
    ContentHeaderComponent,
    ActiveBadgeComponent,
    LowercaseDirective,
    SearchBarComponent,
    TableComponent,
    ToastContainerComponent
  ],
  exports: [
    NavigationComponent,
    BreadcrumbComponent,
    FooterComponent,
    ContentHeaderComponent,
    ActiveBadgeComponent,
    SearchBarComponent,
    LowercaseDirective,
    TableComponent,
    ToastContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    BreadcrumbService
  ]
})
export class LayoutModule {
}