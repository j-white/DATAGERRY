/*
* DATAGERRY - OpenSource Enterprise CMDB
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

import { Component, Input, OnInit } from '@angular/core';
import { ConfigEdit } from '../config.edit';

@Component({
  selector: 'cmdb-choice-field-edit',
  templateUrl: './choice-field-edit.component.html',
  styleUrls: ['./choice-field-edit.component.scss']
})
export class ChoiceFieldEditComponent extends ConfigEdit implements OnInit {

  @Input() groupList: any;
  @Input() userList: any;
  public options: any[] = [];

  constructor() {
    super();
  }

  public ngOnInit(): void {
    if (this.data.options === undefined || !Array.isArray(this.data.options)) {
      this.options.push({
        name: `option-${(this.options.length + 1)}`,
        label: `Option ${(this.options.length + 1)}`
      });
      this.data.options = this.options;
    }
    this.options = this.data.options;
  }

  public addOption() {
    this.options.push({
      name: `option-${(this.options.length + 1)}`,
      label: `Option ${(this.options.length + 1)}`
    });
  }

  public delOption(value: any) {
    if (this.options.length > 1) {
      const index = this.options.indexOf(value, 0);
      if (index > -1) {
        this.options.splice(index, 1);
      }
    }
  }

}
