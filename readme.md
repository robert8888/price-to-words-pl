## Price to Words - PL 
This library converting a price value into a word representation with a currency. 

### Instalation
```bash
npm install price-to-words-pl
```

### Usage
```javascript
import PriceFormater from "price-to-words-pl"

const priceFormater = new PriceFormater()

priceFormater.convert(12.54);
//dwanaście złotych i pięćdziesiąt cztery grosze

priceFormater.format = {myFormat: 'zl-number zl and gr-words gr-full'}
priceFormater.convert(12.54);
//12 zł i pięćdziesiąt cztery grosze
```

### Formats
```javascript
import {CONVERTING_FORMATS} from "price-to-words-pl"
// definition
const CONVERTING_FORMATS = {
    typeA: 'zl-words zl-full and gr-words gr-full', //sto dwadzieścia pięć złotych pięćdziesiąt groszy
    typeB: 'zl-words zl gr-words gr',               //sto dwadzieścia pięć zł pięćdziesiąt gr
    typeC: 'zl-words zl gr-short',                  //sto dwadzieścia pięć zł 50/100
    typeD: 'zl-number zl gr-number gr'              //125 zł 50 gr
}
```
default: typeA.

### Build:
* Webpack 5
* Babel 7
* Jest 27
