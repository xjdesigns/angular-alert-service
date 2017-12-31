import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpxAlertService {
  private subject = new Subject<any>();
  private list: any[] = [];

  constructor() {}

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  addAlert(message, type = 'success', cb) {
    this.list.push({type: type, text: message, callBack: cb});
    this._serviceNext(this.list);
  }

  removeAlertByIndex(i) {
    this.list.splice(i, 1);
    this._serviceNext(this.list);
  }

  clearAll() {
    this.list.splice(0, this.list.length);
    this._serviceNext(this.list);
  }

  _serviceNext(alerts) {
    this.subject.next(alerts);
  }
 }
