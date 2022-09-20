import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-grid',
  templateUrl: './pessoas-grid.component.html',
  styleUrls: ['./pessoas-grid.component.scss']
})
export class PessoasGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() pessoa=[{}];
}
