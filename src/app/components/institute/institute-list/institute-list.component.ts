import { Component, OnInit } from '@angular/core';
import { Institute } from 'src/app/models/Institute';
import { MockService } from 'src/app/services/mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.scss']
})
export class InstituteListComponent implements OnInit {

  institutes:Institute[];

  constructor(private mock:MockService, private router:Router) { }

  ngOnInit() {

    this.institutes = this.mock.institutes;
    console.log(this.institutes);

  }

  goToInstituteDetail(id){

    let url = `/institute/${id}`;

    this.router.navigate([url]);

  }

  goToCreateInstitute(){

    let url = `/institute/create`;

    this.router.navigate([url]);

  }

}
