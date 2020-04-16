import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  color = 'primary';
  mode = 'indeterminate';
  value = 50;

  isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

}
