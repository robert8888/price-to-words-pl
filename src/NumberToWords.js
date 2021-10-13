export default class NumberToWords{
    constructor(dictionary) {
        this.dictionary = dictionary.translations;
    }

    _addTails(numberAsWords){
        return numberAsWords.replace( /(n |[ay] |[ćm] )(tysiąc|milion|miliard)/g,( match, p1, p2 ) => {
            if ( p2 === 'tysiąc' ) {
                switch( p1 ) {
                    case 'n ': return p2;
                    case 'a ':
                    case 'y ': return `${p1}tysiące`;
                    case 'ć ':
                    case 'm ': return `${p1}tysięcy`;
                }
            }
            else {
                switch( p1 ) {
                    case 'n ': return p2;
                    case 'a ':
                    case 'y ': return `${p1}${p2}y`;
                    case 'ć ':
                    case 'm ': return `${p1}${p2}ów`;
                }
            }
        } );
    }

    convert(number){
        number = +number;
        if ( !number || number <= 0 ) {
            return 'zero';
        }
        const numberAsWords = this.dictionary.reduce( ( words, [str, val] ) => {
            const c = ~~( number / val );
            if ( !c ) {
                return words;
            }
            number %= val;
            return words + ( val >= 1000 ? this.convert( c ) + ' ' : '' ) + str + ( number ? ' ': '' );
        }, '' );

        return this._addTails(numberAsWords)
    }


}