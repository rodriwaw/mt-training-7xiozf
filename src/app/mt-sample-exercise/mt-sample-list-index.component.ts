import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
})
export class MtSampleListIndexComponent implements OnInit {
  farms : any;
  farmsStore: any;
  constructor(private dataservice: DataService) {}

  ngOnInit() {
  this.loadTable()
   
  }
  loadTable(){
    this.dataservice.getFarms().subscribe((result) => {
      this.farms = result;
      this.farmsStore = result;
    });
  }
  filterArray(value){
    if(value == "100"){
      this.farms = this.farmsStore.filter(element => element.FarmNo.match("^".concat(value)))
      return this.farms
    }else if( value == "2020"){
      this.farms = this.farmsStore.filter(element => element.ActiveDate.match("^".concat(value)))
      return this.farms
    }
    return this.farms = this.farmsStore
}
callErr(){
  alert(this.dataservice.throwErr())
}
}