import { Component, OnInit } from '@angular/core';
import { Department } from 'app/models/Department';
import { ServerHttpService } from 'app/Services/server-http.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from 'app/pop-up/pop-up.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public departments: Department[] = [];
  constructor(
    private serverHttp: ServerHttpService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
    this.loadData();
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent, {
      data: {
        name: 'samuel'
      }
    });
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
