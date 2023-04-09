import { Component, OnInit } from '@angular/core';
import { TableauInfoServiceService } from 'src/app/core/service/tableauInfoPage/tableau-info-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    data!: Array<unknown>;
    dataInfoSoftware!: Array<unknown>;

    constructor(private tis: TableauInfoServiceService) { }

    ngOnInit(): void {
        this.data = this.tis.servicePageHome;
        this.dataInfoSoftware = this.tis.tableauServicePageHome;
    }

}
