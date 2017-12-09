import {
  Component, Input, HostBinding, HostListener,
  ViewEncapsulation, ElementRef, Renderer2
} from '@angular/core';

import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

// @HostBinding 설정은 @Component.host 속성 다음에 처리되므로 앞에 설정을 덮어 쓰게 된다.
@Component({
  selector: 'song-track4',
  host: {
    '[style]': '_hostStyle' // 악용을 피하기 위해 안전하지 않다고 표시 됨
  },
  templateUrl: './song-track4.component.html',
  styleUrls: ['./song-track4.component.css']
})
export class SongTrack4Component {
  _defaultImage = "https://cdn4.iconfinder.com/data/icons/sound-and-audio/32/black_7_music_node-512.png";
  _coverImage;
  iteration = 0;
  intervalId;
  _hostStyle;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {
    this.changeImage(this._defaultImage);
    // ElementRef 를 주입 받고 nativeElement 속성에 액세스하면 DOM API에 접근 할 수 있다.
    let elem = this.element.nativeElement;
    console.log(elem); // <song-track4 ...></song-track4>

    // 다양한 설정방법 예시
    elem.style.color = "blue";
    elem.style.cssText = "color: blue; text-decoration: underline;";
    elem.setAttribute("style", "color: blue;");

    // ElementRef 를 통해 설정하는 방법은 브라우저 플랫폼에서만 유효하고 모바일에서는 유효하지 않다.
    // 따라서, Renderer 사용을 권장한다.
    renderer.setStyle(elem, "color", "blue");
    renderer.addClass(elem, "selected");

    this.intervalId = setInterval(() => {
      let str = (++this.iteration % 2) ? 'color: deepskyblue;' : 'color: deeppink;';
      // 안전관련 문제가 발생하는 경우 Sanitizer를 사용하여 안전하다고 지정할 수 있다.
      this._hostStyle = this.sanitizer.bypassSecurityTrustStyle(str);
    }, 700);

  }

  @Input() track = "Undefined";
  @Input() artist = "Undefined";
  @Input() set image(url) {
    this.changeImage(url);
  }

  private changeImage(url) {
    let image = url || this._defaultImage;
    this._coverImage = { 'background-image': `url('${image}')` };
  }

  //<song-track class="selected"></song-track>
  @HostBinding('class.selected') selected = false;

  //<song-track style="color: purple;"></song-track>
  @HostBinding('style.color') color = 'deeppink';

  //<song-track (click)="onClick($event)"></song-track>
  @HostListener('click', ['$event'])
  toggleSelected(e) {
    this.selected = !this.selected;
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
