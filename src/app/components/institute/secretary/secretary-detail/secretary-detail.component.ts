import { Component, OnInit } from '@angular/core';
import { Secretary } from 'src/app/models/Institute';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secretary-detail',
  templateUrl: './secretary-detail.component.html',
  styleUrls: ['./secretary-detail.component.scss']
})
export class SecretaryDetailComponent implements OnInit {

  secretary:Secretary;
  secretaryBackup:Secretary;

  showEdit:boolean = true;

  editing:boolean = false;


  constructor(private mock:MockService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {

        if(!!params.id){

          this.secretary = Object.assign({},this.mock.getSecretaryById(params.id));

        } else {

          this.secretary = new Secretary();
          this.showEdit = false;
          this.editing = true;

        }

      }
  );

  }


  edit() {

    if (!!this.showEdit) {

      this.secretaryBackup = Object.assign({}, this.secretary);
      this.editing = true;

    }

  }

  cancelEdit() {

    if (this.showEdit) {
      
    
      this.secretary = this.secretaryBackup;
      this.secretaryBackup = undefined;

      

      this.editing = false;
    
    }



  }

}
