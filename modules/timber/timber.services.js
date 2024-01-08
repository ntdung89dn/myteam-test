const fs = require('fs');
const { checkValidTransformations } = require('../../helpers/data-output.helper');
const dataPath = 'data/out-data.json';

function readFileData(){
    try{
        const data = JSON.parse(fs.readFileSync(dataPath));
        return data;
    }catch{
        return { items: []};
    }
}

async function checkValidAndCreateNewTimberData(timberData){
    if(!fs.existsSync(dataPath)){
        fs.appendFileSync(dataPath,'{ items: []}', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
    const validTimber = checkValidTransformations(timberData.transformations);
    const newTimer = {
        ...timberData,
        ...validTimber
    }
    
    let data = readFileData();
    
    const newItems = [...data.items, newTimer];
    fs.writeFileSync(dataPath,JSON.stringify({
        items: newItems
    }))
    return newTimer;

}


module.exports = {
    checkValidAndCreateNewTimberData,
}