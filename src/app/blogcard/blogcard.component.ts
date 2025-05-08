import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogCardComponent {


  @Input() image!: string;
  @Input() title!: string;
  @Input() meta!: string;
  @Input() excerpt!: string;
  @Input() date!: { day: string; month: string; year: string };



  
}
