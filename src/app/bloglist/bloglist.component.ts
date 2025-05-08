import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BlogCardComponent } from '../blogcard/blogcard.component';

@Component({
  selector: 'app-bloglist',
  standalone: true,
  imports: [CommonModule, BlogCardComponent,NgFor],
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BlogListComponent {


  blogPosts = [
    {
      image: 'assets/africa.jpg',
      title: 'African Wildlife',
      meta: 'AFRICA / LEAVE A COMMENT',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      date: { day: '9', month: 'Jan', year: '2018' }
    },
    {
      image: 'assets/sahara.jpg',
      title: 'Sahara Adventures',
      meta: 'AFRICA / 2 COMMENTS',
      excerpt: 'Explore the dunes of the Sahara with a once-in-a-lifetime trip...',
      date: { day: '22', month: 'Feb', year: '2020' }
    }
  ];
}


