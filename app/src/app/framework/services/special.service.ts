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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallService, ApiService } from '../../services/api-call.service';
import { CmdbDao } from '../models/cmdb-dao';


@Injectable({
  providedIn: 'root'
})
export class SpecialService<T = CmdbDao> implements ApiService {
  public servicePrefix: string = '/';

  constructor(private api: ApiCallService) {
  }

  public getNewestObjects(): Observable<T[]> {
    return this.api.callGet<T[]>(`render/newest/`).pipe(
      map((apiResponse) => {
        return apiResponse.body;
      })
    );
  }

  public getLatestObjects(): Observable<T[]> {
    return this.api.callGet<T[]>(`render/latest/`).pipe(
      map((apiResponse) => {
        return apiResponse.body;
      })
    );
  }

}