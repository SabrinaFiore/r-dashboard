import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() label: string = 'hola';
  @Input() total: string = 'total';
  @Input() percentage: string;
  @Input() data = [ 1, 2, 3, 4];

  constructor() { }

  ngOnInit(): void {
  }

}
