import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/models/Publication';
import { MockService } from 'src/app/services/mock.service';
import { ActivatedRoute } from '@angular/router';
import { Institute, Secretary } from 'src/app/models/Institute';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.scss']
})
export class PublicationDetailComponent implements OnInit {

  publication:Publication;

  instituteOptions:Institute[];
  secretaryOptions:Secretary[];
  
  selectedInstituteId:number;
  selectedSecretaryId:number;

  selectedInstitute:Institute;
  selectedSecretary:Secretary;


  showEdit: boolean = true;

  editing: boolean = false;

  br: any = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
    dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    dayNamesMin: ["Do", "Sg", "Te", "Qa", "Qi", "Sx", "Sb"],
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(private mock:MockService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {

        if (!!params.id) {

          this.publication = this.mock.getPublicationById(params.id);

        } else {

          this.publication = new Publication();
          this.showEdit = false;
          this.editing = true;

          this.instituteOptions = this.mock.getAllInstitutes();


        }

      }
    );

  }

  onInsituteChange(){

    this.selectedSecretaryId = undefined;
    this.selectedSecretary = undefined;

    this.selectedInstitute = this.mock.getInstituteById(this.selectedInstituteId);

    this.secretaryOptions = this.mock.getInstituteSecretaries(this.selectedInstitute.id);

    console.log(this.selectedInstitute);
 

  }

  onSecretaryChange(){

    this.selectedSecretary = this.mock.getSecretaryById(this.selectedSecretaryId);

    console.log(this.selectedSecretary);

  }

}
