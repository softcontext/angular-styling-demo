import { Component, Input, HostBinding, OnInit } from '@angular/core';

// host 속성을 사용하여 컴포넌트 호스트(즉, <song-track2> 태그)에
// 속성을 추가할 수 잇다. 설정 시 문자열을 사용해야 한다.
// 속성의 적용결과는 다음과 같다.
// <song-track2 class="selected" style="color: yellow;" (click)="toggleSelected($event)"></song-track2>
@Component({
  selector: 'song-track2',
  host: {
    '[class.selected]': 'selected',
    '[style.color]': '"yellow"',
    '(click)': 'toggleSelected($event)',
  },
  templateUrl: './song-track2.component.html',
  styleUrls: ['./song-track2.component.css']
})
export class SongTrack2Component {
  selected: boolean = true;

  toggleSelected(e) {
    this.selected = !this.selected;
  }
}
