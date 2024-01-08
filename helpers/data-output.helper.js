const ErrorReason = {
    INVALID_PART_NUM: 'Invalid Part Num',
    INVALID_RANGE_SIZE: 'Invalid Range Size',
    INVALID_INCREMENT: 'Invalid Increments'
}

function checkValidTransformations(transformations){
    if (!Array.isArray(transformations))
        return {
            "balance": 0,
            "isValid": true,
            "errorReason": 'null'
        };

    const balance = transformations.map((item)=>{
        return item.size * item.qty
    }).reduce((previous, current)=>{
        return previous += current;
    },0);

    if(isValidPartNum(transformations))
        return { 
            "balance": balance,
            "isValid": false,
            "errorReason": ErrorReason.INVALID_PART_NUM
        }
    
    if(isValidRangeSize(transformations))
        return { 
            "balance": balance,
            "isValid": false,
            "errorReason": ErrorReason.INVALID_RANGE_SIZE
        }
    
    if(isValidIncrement(transformations))
        return { 
            "balance": balance,
            "isValid": false,
            "errorReason": ErrorReason.INVALID_INCREMENT
        }
}

function isValidPartNum(transformations){
    const partNums = transformations.map((item)=>{
        return item.partNum;
    });
   return new Set(partNums).size != 1;

}

function isValidRangeSize(transformations){
    return transformations.every((item)=>{
        return !(item.size > 12 || item.size <3);
    });
}

function isValidIncrement(transformations){
    return transformations.every((item)=>{
        return (item.size*10 ) % 3 !== 0;
    });
}

module.exports = {
    isValidPartNum,
    isValidRangeSize,
    isValidIncrement,
    checkValidTransformations
}