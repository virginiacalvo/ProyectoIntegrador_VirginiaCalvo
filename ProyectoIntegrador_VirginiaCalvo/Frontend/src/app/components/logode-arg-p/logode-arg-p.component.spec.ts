import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogodeArgPComponent } from './logode-arg-p.component';

describe('LogodeArgPComponent', () => {
  let component: LogodeArgPComponent;
  let fixture: ComponentFixture<LogodeArgPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogodeArgPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogodeArgPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
