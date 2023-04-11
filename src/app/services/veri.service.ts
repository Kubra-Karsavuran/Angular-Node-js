import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { titra_shema } from '../start/data';

@Injectable({
  providedIn: 'root',
})
export class VeriService {
  typegore(data: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}
  //path = 'http://localhost:3000/api';

  //TODO json dosyasını goruntuleme ıslmeı
  see(): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/getall');
  }

  // TODO benzersız type verilerini yazdırmak ıcın yapıldı bu ıslem
  fortype(): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/fortype');
  }

  // TODO secılen benzersız type uygun verı yansıtılacak burda
  get(veri: any): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/fortype/get/' + veri);
  }

  // TODO zaman ıslemlerı yapılacak
  fortime(timeone: any, timetwo: any): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/time/' + timeone + '/' + timetwo);
  }
}
