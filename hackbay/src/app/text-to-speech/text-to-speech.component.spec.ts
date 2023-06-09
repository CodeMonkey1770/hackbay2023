import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSpeechComponent } from './text-to-speech.component';

describe('TextToSpeechComponent', () => {
  let component: TextToSpeechComponent;
  let fixture: ComponentFixture<TextToSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextToSpeechComponent]
    });
    fixture = TestBed.createComponent(TextToSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
