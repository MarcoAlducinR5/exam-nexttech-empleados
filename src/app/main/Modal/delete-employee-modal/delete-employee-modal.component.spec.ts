import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeeModalComponent } from './delete-employee-modal.component';

describe('DeleteEmployeeModalComponent', () => {
  let component: DeleteEmployeeModalComponent;
  let fixture: ComponentFixture<DeleteEmployeeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmployeeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmployeeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
