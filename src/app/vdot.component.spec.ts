import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VdotComponent } from './vdot.component';

describe('VdotComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        VdotComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(VdotComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vdot-app'`, () => {
    const fixture = TestBed.createComponent(VdotComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('vdot-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(VdotComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('vdot-app app is running!');
  });
});
