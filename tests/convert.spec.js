import PriceConverter, {CONVERTING_FORMATS} from "../src";

const testsA = [
    [0, `zero złotych i zero groszy`],
    [.01, `zero złotych i jeden grosz`],
    [.1, `zero złotych i dziesięć groszy`],
    [.18, `zero złotych i osiemnaście groszy`],
    [12.54, `dwanaście złotych i pięćdziesiąt cztery grosze`],
    [46449.50, `czterdzieści sześć tysięcy czterysta czterdzieści dziewięć złotych i pięćdziesiąt groszy`],
    [49.90, `czterdzieści dziewięć złotych i dziewięćdziesiąt groszy`],
    [19.90, `dziewiętnaście złotych i dziewięćdziesiąt groszy`],
    [19.99, `dziewiętnaście złotych i dziewięćdziesiąt dziewięć groszy`]
]

const testsB = [
    [0, `zero zł zero gr`],
    [12.54, `dwanaście zł pięćdziesiąt cztery gr`],
    [46449.50, `czterdzieści sześć tysięcy czterysta czterdzieści dziewięć zł pięćdziesiąt gr`],
    [49.90, `czterdzieści dziewięć zł dziewięćdziesiąt gr`],
    [19.90, `dziewiętnaście zł dziewięćdziesiąt gr`],
    [19.99, `dziewiętnaście zł dziewięćdziesiąt dziewięć gr`]
]

describe('it should convert price', () => {
    let priceConverter;
    const format = CONVERTING_FORMATS.typeB;

    beforeEach(() => {
        priceConverter = new PriceConverter();
    })

    it('convert to words test for format typeA', () => {
        testsA.forEach(([number, inWords]) => {
            const result = priceConverter.convert(number, CONVERTING_FORMATS.typeA);
            expect(result).toEqual(inWords)
        })
    })

    it('convert to words test for format typeB', () => {
        testsB.forEach(([number, inWords]) => {
            const result = priceConverter.convert(number, CONVERTING_FORMATS.typeB);
            expect(result).toEqual(inWords)
        })
    })
})