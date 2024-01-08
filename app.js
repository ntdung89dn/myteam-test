const express = require('express');
const app = express();
var cors = require('cors')
const port = 3000;
const timberController = require('./modules/timber/timber.controller');
const dataPath = 'modules/timber/data/input-data.json';


app.use(cors())
app.use(express.json());

app.use("/timber", timberController);

function initializeData(){
    
    try{
        const data = JSON.parse(fs.readFileSync(dataPath));
        const outputDatas = data?.map((item)=>{
            const {transaction, transformations} = item;
            transformations?.map((transformation)=>{

            })
            return {
                transaction,
                transformations,
                "balance": 0,
                "isValid": true,
                "errorReason": null
            }
        });
        res.send(JSON.parse(data));
    }catch(ex){
        console.log('loading file error');
    }
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})