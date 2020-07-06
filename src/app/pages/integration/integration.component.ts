import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

import { projectData } from './projectdata';

@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.scss']
})
export class IntegrationComponent implements OnInit {
  
  breadCrumbItems: Array<{}>;

  projectData: Project[];
 
  constructor() { }

  ngOnInit(){
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects List', active: true }];

   this.projectData = projectData;
  }

}
