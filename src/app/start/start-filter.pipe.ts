import { Pipe, PipeTransform } from '@angular/core';
import { titra_shema } from '../start/data';

@Pipe({
  name: 'startFilter',
})
export class StartFilterPipe implements PipeTransform {
  transform(value: titra_shema[], filterText?: string): titra_shema[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : undefined;
    // arama ifadesı varsa bu verıyı kucuk ıfadeye cevır

    return filterText
      ? value.filter(
          (p: titra_shema) =>
            p.message.toLocaleLowerCase().indexOf(filterText!) !== -1
        )
      : value;

    //filtertext varmı varsa value yı fıltrele her bır p için kucuk harfe cevır ve içerisinde
    // arama ıfadesı varmı dıye bak
  }
}
