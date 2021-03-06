import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cmdb-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {

  @Input() message: string;
  @Input() icon: string = 'far fa-file';
  @Input() doc: string = 'https://docs.datagerry.com';

  constructor() { }

  ngOnInit() {
  }
}
