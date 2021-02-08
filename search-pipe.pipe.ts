import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(image: any[], searchText: string, fieldName: string): any {
    if(!image)
    {
      return [];
    }
    if (!searchText) 
    { return image; }

    searchText = searchText.toLowerCase();

    return image.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchText);
      }
      return false;
    });

  }

}
