import FormatManger from "./FormatManager.js";
import Convert from "./Convert.js";
import dictionaryPl from "./dictionary_pl.json";

export default class PriceConverter {
    constructor({
            formatManger = new FormatManger(),
            dictionary = dictionaryPl,
            format
    } = {}
    ) {
        this.formatManger = formatManger;
        this.dictionary = dictionary;
        this._defautlFormat = format;
    }

    _priceToArray(price){
        if(typeof price !== "number" || isNaN(price)){
            throw new TypeError("Invalid price value")
        }
        let priceString = price.toString();
        priceString = priceString === "0" ? "0.0": priceString;

        let [wholePart, decimalPart] = priceString.split(/[,.]/);

        decimalPart = (decimalPart || '').padEnd(2, '0');

        [wholePart, decimalPart].map(part => +part)


        if(isNaN(wholePart) || isNaN(decimalPart)){
            throw new Error("Parsing error")
        }

        return [~~wholePart, ~~decimalPart]
    }

    addFormats(formats){
        this.formatManger.addFormats(formats)
    }

    set format(format){
        if(this.formatManger.has(format)){
            this.addFormats(format)
        }
        this._defautlFormat = Object.values(format)[0];
    }

    convert(price, format = this._defautlFormat){
        if(typeof format === "object"){
            format = Object.values(format)?.[0];
        }

        this.priceArray = ( price != undefined ) ? this._priceToArray( price ) : null;

        format = this.formatManger.getPriceFormat( format );

        const convertPricePart = new Convert( this.priceArray, this.dictionary);
        let result = '';

        if ( !this.priceArray ) {
            throw new TypeError('Invalid input format')
        }

        for ( let method of format ) {

            try {
                result += convertPricePart[method]() + ' ';
            } catch ( err ) {
                throw new TypeError('Invalid format!');
            }
        }

        return result.trim();
    }
}