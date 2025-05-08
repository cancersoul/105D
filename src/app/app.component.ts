import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { BlogCardComponent } from "./blogcard/blogcard.component";
import { BlogListComponent } from "./bloglist/bloglist.component";
import { BlogMarqueeComponent } from "./blog-marquee/blog-marquee.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent, BlogListComponent, BlogMarqueeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'karthik_photographi';
  blogPosts = [
    {
      image: 'assets/img/blog1.jpg',
      title: 'African Wildlife',
      meta: 'AFRICA / LEAVE A COMMENT',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: { day: '9', month: 'Jan', year: '2018' }
    },
    {
      image: 'assets/img/blog2.jpg',
      title: 'European Alps',
      meta: 'EUROPE / 2 COMMENTS',
      excerpt: 'Discover the stunning peaks and valleys of the Alps.',
      date: { day: '12', month: 'Feb', year: '2021' }
    },
    // Add more objects as needed...
  ];
}
