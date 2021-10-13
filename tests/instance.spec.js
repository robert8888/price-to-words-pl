import PriceConverter, {CONVERTING_FORMATS} from "../src";

describe('it should convert price', () => {

    it("should create instance", () => {
        const priceConverter = new PriceConverter();
        expect(priceConverter).toBeInstanceOf(PriceConverter);
        expect(priceConverter.convert).not.toBeUndefined();
    })

    it("should export converting formats dictionary", () => {
        expect(CONVERTING_FORMATS).not.toBeUndefined();
        expect(Object.entries(CONVERTING_FORMATS).length).toBeGreaterThan(0);
        ['typeA', 'typeB', 'typeC', 'typeD'].forEach(type => {
            expect(CONVERTING_FORMATS[type]).not.toBeUndefined()
        })
    })
})