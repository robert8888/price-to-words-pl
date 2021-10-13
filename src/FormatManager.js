
export const CONVERTING_FORMATS = {
    typeA: 'zl-words zl-full and gr-words gr-full', //sto dwadzieścia pięć złotych pięćdziesiąt groszy
    typeB: 'zl-words zl gr-words gr',           //sto dwadzieścia pięć zł pięćdziesiąt gr
    typeC: 'zl-words zl gr-short',              //sto dwadzieścia pięć zł 50/100
    typeD: 'zl-number zl gr-number gr'          //125 zł 50 gr
};

export default  class FormatManger{
    constructor(formats = CONVERTING_FORMATS) {
        this.formats = formats;
    }

    addFormats(formats){
        Object.assign(this.formats, formats)
    }

    has(format){
        const [name, ] = Object.entries(format);
        return name in this.formats;
    }

    _formatRulesToMethodName(str){
        let rulesToArray = str.match( /[-a-z]+/gi ); //'zl-words zl' -> ['zl-words', 'zl']
        return rulesToArray.map( oneRule => {
            return oneRule.replace( /(-)([a-z])/gi, ( match, p1, p2 ) => {
                return p2.toUpperCase(); //'zl-words' -> 'zlWords'
            } );
        } ); //['zl-words', 'zl'] -> ['zlWords', 'zl']
    }

    getPriceFormat(formatRules){
        let formatRulesArray = this._formatRulesToMethodName(  this.formats.typeA );

        if ( typeof formatRules === 'string' ) {
            if ( formatRules.length === 1 ) {
                let type = `type${formatRules.toUpperCase()}`;
                if ( this.formats.hasOwnProperty( type ) ) {
                    formatRulesArray = this._formatRulesToMethodName(  this.formats[type] );
                }
            }
            else {
                let tmp = this._formatRulesToMethodName( formatRules );
                formatRulesArray = ( tmp.length ) ? tmp : formatRulesArray;
            }
        }
        else if ( typeof formatRules !== 'undefined' ) {
            formatRulesArray = [''];
        }

        return formatRulesArray;
    }
}