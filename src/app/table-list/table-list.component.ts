import { Component, OnInit } from '@angular/core';
import { Department } from 'app/models/Department';
import { ServerHttpService } from 'app/Services/server-http.service';
import { Router } from 'express';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public departments: Department[] = [];
  constructor(
    private serverHttp: ServerHttpService,
  ) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.serverHttp.getDepartments().subscribe((data) => {
      console.log('getStudents', data);
      this.departments = data;
      console.log(this.departments);
      //this.common.setTotalStudents(data.length);
    });
  }

}
