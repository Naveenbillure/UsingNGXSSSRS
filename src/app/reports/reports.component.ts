import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {ReportsServiceService} from 'src/app/reports-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  treeNodes:TreeNode[];

  reportServer: string = 'http://a6114400/ReportServer';
  // reportUrl: string = 'TestRDL/TestReport';
  // reportUrl: string = 'TestRDL/TestReport2';
  reportUrl:string='';
  showParameters: string = "true"; 
  parameters: any = { };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";

  constructor(private reportService:ReportsServiceService) { }

  ngOnInit(): void {
    this.reportService.getReports().then(nodes=>this.treeNodes=nodes);
  }

  nodeSelect(event) {
    console.log(event);
    //event.node = selected node
    this.reportUrl=event.node.data;
  }

}
