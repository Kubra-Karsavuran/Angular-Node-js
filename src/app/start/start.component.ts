import { Component } from '@angular/core';
import { VeriService } from '../services/veri.service';
import { titra_shema } from './data';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  providers: [VeriService],
})
export class StartComponent {
  constructor(private veriService: VeriService) {}
  allveri: titra_shema[] = [];
  typeler: titra_shema[] = [];
  time: titra_shema[] = [];
  typegetir: titra_shema[] = [];
  filterText = '';

  // TODO ekrana veri yazdırma işlemi
  ngOnInit(sonuc: any) {
    this.veriService.see().subscribe((data) => {
      this.allveri = data;
    });
    this.veriService.fortype().subscribe((data) => {
      this.typeler = data;
    });
  }

  // TODO type ekrana verı yazdırma ıslemı
  typelericin: boolean = false;
  asil: boolean = true;
  verisee(veriler: any) {
    this.veriService.get(veriler).subscribe((data) => {
      this.typelericin = true;
      this.asil = false;
      this.typegetir = data;
    });
  }

  //TODO modal ıcın
  veri: string = '';
  div: boolean = true;
  modalmesaj: boolean = false;
  gomesaj(veri: string) {
    this.div = false;
    this.modalmesaj = true;
    this.veri = veri;
    return veri;
  }
  kapat() {
    this.div = true;
    this.modalmesaj = false;
    location.reload();
  }

  // TODO modal ıcın
  modaltype: boolean = false;
  fortype: titra_shema[] = [];
  gotype() {
    this.div = false;
    this.modaltype = true;
  }

  // TODO  times ıcın yapıldı aralık alınacak (yapılmadı daha)
  modaltimes: boolean = false;
  gotimes() {
    this.modaltimes = true;
    this.div = false;
  }

  // TODO times icin yapılan calısma bakalım olacakmı
  timeone = '';
  onKeyUp(timeone: any) {
    this.timeone = timeone.target.value;
  }
  timetwo = '';
  onKeyUpiki(timetwo: any) {
    this.timetwo = timetwo.target.value;
  }
  ///verılen bu ıcı zaman aralıgında verı cekılecek
  fortime: boolean = false;
  timesfor() {
    this.fortime = true;
    this.asil = false;
    this.veriService.fortime(this.timeone, this.timetwo).subscribe((data) => {
      this.time = data;
    });
  }
}
