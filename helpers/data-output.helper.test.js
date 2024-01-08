const { isValidPartNum, isValidRangeSize, isValidIncrement } = require('./data-output.helper');

describe("isValidPartNum", () => {

    test("returns true if all partNum is same", () => {
        const mockCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 9.6,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 6.9,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 8.4,
                "qty": 1
            },
        ]
        const validPartNum = isValidPartNum(mockCorrectData)
        expect(validPartNum).toBe(true);
    });

    test("returns false if any partNum is different", () => {
        const mockNotCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 9.6,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 6.9,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S3",
                "size": 8.4,
                "qty": 1
            },
        ]
        const invalidPartNum = isValidPartNum(mockNotCorrectData)
        expect(invalidPartNum).toBe(false);
    });

});

describe("isValidRangeSize", () => {

    test("returns true if size between 3 and 12", () => {
        const mockCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 9.6,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 6.9,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 8.4,
                "qty": 1
            },
        ]
        const validPartNum = isValidRangeSize(mockCorrectData)
        expect(validPartNum).toBe(true);
    });

    test("returns false if any size shorter 3 and more than 12", () => {
        const mockNotCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 13,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 2,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S3",
                "size": 8.4,
                "qty": 1
            },
        ]
        const invalidPartNum = isValidRangeSize(mockNotCorrectData)
        expect(invalidPartNum).toBe(false);
    });

});

describe("isValidIncrement", () => {

    test("returns true if not increments by 0.3", () => {
        const mockCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 8.6,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 6.4,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 5,
                "qty": 1
            },
        ]
        const validPartNum = isValidIncrement(mockCorrectData)
        expect(validPartNum).toBe(true);
    });

    test("returns false if increments by 0.3", () => {
        const mockNotCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 13,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 2,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 8.4,
                "qty": 1
            },
        ]
        const invalidPartNum = isValidIncrement(mockNotCorrectData)
        expect(invalidPartNum).toBe(false);
    });

});



describe("isValidIncrement", () => {

    test("returns true if not increments by 0.3", () => {
        const mockCorrectData = [
            {
                "partNum": "SL1524042H2S",
                "size": 8.6,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": 6.4,
                "qty": 1
            },
            {
                "partNum": "SL1524042H2S",
                "size": -5,
                "qty": 1
            },
        ]
        const data = mockCorrectData.map((item)=>{
            return item.size * item.qty
        }).reduce((previous, current)=>{
            return previous += current;
        },0)
        expect(data).toBe(10);
    });

});