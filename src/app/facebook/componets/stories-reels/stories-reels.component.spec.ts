import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesReelsComponent } from './stories-reels.component';

describe('StoriesReelsComponent', () => {
  let component: StoriesReelsComponent;
  let fixture: ComponentFixture<StoriesReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriesReelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriesReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
