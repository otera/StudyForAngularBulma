import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-scrolltest',
  templateUrl: './scrolltest.component.html',
  styleUrls: ['./scrolltest.component.scss'],
  animations: [
    // スクロールボタン
    trigger('showTopScroll', [
      state(
        'open',
        style({
          opacity: 0.7
        })
      ),
      state(
        'closed',
        style({
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.4s')]),
      transition('closed => open', [animate('0.4s')])
    ])
  ]
})
export class ScrolltestComponent implements OnInit, OnDestroy, AfterViewInit {
  protected isScroll = false; // スクロールボタン表示判定
  private subShowScroll: Subscription;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subShowScroll.unsubscribe();
  }

  ngAfterViewInit() {
    // スクロールボタンの表示判定
    this.subShowScroll = fromEvent(window, 'scroll').subscribe(e => {
      if (document.documentElement.scrollTop > 100) {
        this.isScroll = true; // 表示
      } else {
        this.isScroll = false; // 非表示
      }
    });
  }

  // スクロールボタン押下
  protected scrolltop() {
    const targetscroll = document.getElementById('targetscroll');
    if (targetscroll) {
      targetscroll.scrollIntoView();
    }
  }
}
