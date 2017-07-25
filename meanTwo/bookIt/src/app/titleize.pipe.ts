import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleize'
})

export class TitleizePipe implements PipeTransform {
    public static skipWords = ['of', 'the', 'a', 'in', 'an', 'or'];

    transform(sentence: string, processOrAltWords?: boolean | string[]): string {
        if (typeof sentence != 'string') {
            return sentence
        }
        const skippedWords = Array.isArray(processOrAltWords) ? processOrAltWords : TitleizePipe.skipWords;
        const processSkipWords:boolean = processOrAltWords !==false;

        return sentence.replace(/\w[^-\s]*/g, (word, idx) => {
            if (idx && processSkipWords && skippedWords.includes(word.toLowerCase())) {
                return word.toLowerCase(); 
            }
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        });
    }

}