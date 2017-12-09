import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'song-track1',
  templateUrl: './song-track1.component.html',
  styleUrls: ['./song-track1.component.css'],
})
export class SongTrack1Component {
  @Input() track = "Undefined";
  @Input() artist = "Undefined";

  // @HostBinding 데코레이터는 @Component.host 메타 데이터 로 변환된다.
  //<song-track class="selected"></song-track>
  @HostBinding('class.selected') selected = true;

  //<song-track style="color: deeppink;"></song-track>
  @HostBinding('style.color') color = 'white';

  //<song-track (click)="onClick($event)"></song-track>
  @HostListener('click', ['$event'])
  toggleSelected(e) {
    this.selected = !this.selected;
  }
}
