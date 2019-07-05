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

import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../../../services/api-call.service';
import { ActivatedRoute } from '@angular/router';
import { CmdbType } from '../../../models/cmdb-type';
import { CmdbObject } from '../../../models/cmdb-object';
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'cmdb-type-view',
  templateUrl: './type-view.component.html',
  styleUrls: ['./type-view.component.scss']
})
export class TypeViewComponent implements OnInit {

  public typeID: number;
  public typeInstance: CmdbType;

  constructor(private typeService: TypeService, private route: ActivatedRoute) {
    this.route.params.subscribe((id) => {
      this.typeID = id.publicID;
    });
  }

  public ngOnInit(): void {
    this.typeService.getType(this.typeID).subscribe((typeInstanceResp: CmdbType) => {
      this.typeInstance = typeInstanceResp;
    });
  }

}