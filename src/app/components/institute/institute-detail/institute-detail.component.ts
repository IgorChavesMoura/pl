import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Institute, Secretary } from 'src/app/models/Institute';

@Component({
  selector: 'app-institute-detail',
  templateUrl: './institute-detail.component.html',
  styleUrls: ['./institute-detail.component.scss']
})
export class InstituteDetailComponent implements OnInit {

  institute: Institute;
  instituteBackup: Institute;

  secretaries:Secretary[] = [];

  showEdit: boolean = true;

  editing: boolean = false;

  constructor(private mock: MockService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {

        if (!!params.id) {

          this.institute = this.mock.getInstituteById(params.id);

        } else {

          this.institute = new Institute();
          this.showEdit = false;
          this.editing = true;

        }

      }
    );

  }

  goToSecretaryDetail(id) {

    let url = `/secretary/${id}`;

    this.router.navigate([url]);

  }

  newSecretary(){

    this.secretaries.push(new Secretary());

  }

  save(){

    this.secretaries.forEach(
      s => {

        if(!s.name){
          this.secretaries.splice(this.secretaries.indexOf(s),1);
        }

      }
    );
    

  }

  edit() {

    if (!!this.showEdit) {

      this.instituteBackup = Object.assign({}, this.institute);
      this.editing = true;

    }

  }

  cancelEdit() {

    if (this.showEdit) {
      
      this.institute = this.instituteBackup;
      this.instituteBackup = undefined;
      this.editing = false;
    
    }



  }

}
