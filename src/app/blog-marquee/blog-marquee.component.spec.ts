import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMarqueeComponent } from './blog-marquee.component';

describe('BlogMarqueeComponent', () => {
  let component: BlogMarqueeComponent;
  let fixture: ComponentFixture<BlogMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
