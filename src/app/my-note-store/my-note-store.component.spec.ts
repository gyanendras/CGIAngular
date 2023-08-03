import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNoteStoreComponent } from './my-note-store.component';

describe('MyNoteStoreComponent', () => {
  let component: MyNoteStoreComponent;
  let fixture: ComponentFixture<MyNoteStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNoteStoreComponent]
    });
    fixture = TestBed.createComponent(MyNoteStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
