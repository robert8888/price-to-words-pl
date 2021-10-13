import NumberToWords from "./NumberToWords.js";

export default class Convert {
    constructor ( priceAsArray, dictionary) {
        this.price = priceAsArray;
        this.numberToWords = new NumberToWords(dictionary);
    }

    /**
     * zlNumber
     * @return {String} e.g. '25'
     */
    zlNumber () {
        return `${this.price[0]}`;
    }

    /**
     * grNumber
     * @returns {String} e.g. '10'
     */
    grNumber () {
        return ( this.price[1] < 10 ) ? `0${this.price[1]}` : `${this.price[1]}`;
    }

    /**
     * zlWords
     * @returns {String} e.g. 'dwadzieścia pięć'
     */
    zlWords () {
        return this.numberToWords.convert( this.price[0] );
    }

    /**
     * grWords
     * @returns {String} e.g. 'dziesięć'
     */
    grWords () {
        return this.numberToWords.convert( this.price[1] );
    }

    /**
     * zl
     * @returns {String} 'zł'
     */
    zl () {
        return 'zł';
    }

    /**
     * gr
     * @returns {String} 'gr'
     */
    gr () {
        return 'gr';
    }

    /**
     * grShort
     * @returns {String} e.g. '10/100'
     */
    grShort () {
        return `${this.grNumber( this.price )}/100`;
    }

    /**
     * zlFull
     * @returns {String} e.g. 'złotych'
     */
    zlFull () {
        if ( this.price[0] === 1 ) {
            return 'złoty';
        }
        if ( this.price[0] >= 5 && this.price[0] < 21 ) {
            return 'złotych';
        }
        let zl = this.price[0].toString().split( '' ).slice( -1 );
        if ( /[234]/.test( zl ) ) {
            return 'złote';
        }
        else {
            return 'złotych';
        }
    }

    /**
     * grFull
     * @returns {String} e.g. 'groszy'
     */
    grFull () {
        if ( this.price[1] === 1 ) {
            return 'grosz';
        }
        if ( this.price[0] === 0 && ( this.price[1] >= 5 && this.price[1] < 21 ) ) {

            return 'groszy';
        }
        let gr = this.price[1].toString().split( '' ).slice( -1 );

        if ( /[234]/.test( gr ) ) {
            return 'grosze';
        }
        else {
            return 'groszy';
        }
    }

    and(){
        return `i`
    }
}
