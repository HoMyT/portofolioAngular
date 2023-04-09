import { Component, OnInit } from '@angular/core';
import { TableauInfoServiceService } from 'src/app/core/service/tableauInfoPage/tableau-info-service.service';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.scss']
})
export class ServicesDetailsComponent implements OnInit {

    constructor(private tis: TableauInfoServiceService) { }
    data!: Array<unknown>
    ngOnInit(): void {
        this.data = this.tis.tableauDescriptifPageDetail;
    }

}
