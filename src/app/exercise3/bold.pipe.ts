// bold starting matching letters
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {
  transform(list: string, input: string): string {
    const listLower = list.toLowerCase();
    const inputLower = input.toLowerCase();

    if(input){
     // Create a regular expression object
     const matchOptions = new RegExp(inputLower, 'g');

     // Use regex.exec to find the first match
    const boldedValue = listLower.replace(
      matchOptions,
      (match: string) => `<b>${match}</b>`
    );
    // Return the matched characters and only list that has matches
    // maybe apply this search to formcontrol value on value change!
    // only search list with those matches, could filter
    console.log('only', boldedValue)
    return boldedValue;
    }
    return list
  }
}