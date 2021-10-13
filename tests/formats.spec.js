import PriceConverter from "../src";

describe('it should convert price', () => {

    it('it should allow add custom format', () =>{
        const testFormat =  'zl-number zl and gr-number gr'
        const priceConverter = new PriceConverter()
        priceConverter.format = {testFormat};
        const inWords = priceConverter.convert(12.54)

        expect(inWords).toEqual("12 zł i 54 gr");
    });

    it('it should allow add custom format', () =>{
        const testFormat =  'zl-number zl and gr-words gr-full'
        const priceConverter = new PriceConverter()
        priceConverter.format = {testFormat};
        const inWords = priceConverter.convert(12.54)
        expect(inWords).toEqual("12 zł i pięćdziesiąt cztery grosze");
    })
})