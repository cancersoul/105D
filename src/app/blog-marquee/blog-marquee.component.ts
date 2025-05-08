import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from '../blogcard/blogcard.component';

@Component({
  selector: 'app-blog-marquee',
  standalone: true,
  imports: [CommonModule,BlogCardComponent],
  templateUrl: './blog-marquee.component.html',
  styleUrls: ['./blog-marquee.component.css']
})
export class BlogMarqueeComponent {
  @Input() posts: any[] = [];
}
