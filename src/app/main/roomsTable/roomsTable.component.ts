import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { RoomColumnHeader, RoomModel } from '../../core/models/room.model';
import { DataService } from '../../core/services/data.service';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
    selector     : 'rooms-table',
    templateUrl  : './roomsTable.component.html',
    styleUrls    : ['./roomsTable.component.scss'],
})
export class RoomsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscription: Subscription;
  headers: RoomColumnHeader[] = [
    {
      name: 'type',
      value: 'Номер'
    },
    {
      name: 'count',
      value: 'Количество мест'
    },
    {
      name: 'price',
      value: 'Цена за день'
    }
  ];
  displayedHeaders: any[] = this.headers.map(header => header.name);
  rooms = new MatTableDataSource<RoomModel>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) {}


  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.subscription = this.dataService.getRooms().subscribe(res => {
      this.rooms.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.rooms.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
