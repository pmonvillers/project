const {OperationHelper} = require('apac'),
                express = require('express'),
                    app = express(),
             bodyParser = require('body-parser');

app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS")
next();
}); 

app.use(bodyParser());
require('dotenv').load();


const opHelper = new OperationHelper({
    awsId:     process.env.aws_Id,
    awsSecret: process.env.aws_Secret,
    assocId:   "qwerty0be-20",
    locale:    'CA'
});

let keyWords = [],
    budgetMax = [],
    itemId = [];

app.post('/questionnaire', (req, res) => {
    let key = req.body.keywords;
    let budget = req.body.budget;
    keyWords.push(...key)
    budgetMax.push(budget)
    console.log(keyWords);
    res.send('success');
});

app.post('/itemId', (req, res) =>{
    let item = req.body.itemId;
    itemId.push(item)
    res.send('success');
})


app.get('/', (req, res) =>{

    opHelper.execute('ItemSearch', {
        
        'ResponseGroup' : 'Medium',
        'SearchIndex' : 'All',
        'Keywords': keyWords.join(' '),
        'MaximumPrice': budgetMax[0],
      }).then((response) => {

        res.json(response.result.ItemSearchResponse.Items.Item)
        console.log(keyWords);
        console.log(budgetMax);
        console.log(response);
      }).catch((err) => {
          console.error(err);
      });
});

app.get('/similar/:itemId', (req, res) =>{
    console.log(req.params.itemId)
    opHelper.execute('SimilarityLookup', {
        
        'ResponseGroup':'Medium',
        'IdType':'ASIN',
        'ItemId':req.params.itemId,
        'MaximumPrice': budgetMax[0],
      }).then((response) => {

        res.json(response.result.SimilarityLookupResponse.Items.Item)
        console.log(response.result.SimilarityLookupResponse.Items.Item, itemId);
      })
      .catch((err) => {
          console.error(err);
      });
})
app.delete('/newsearch', (req, res) =>{
    keyWords = [],
    budgetMax = [],
    itemId = [];
    res.send(200);
    console.log('keyWords', keyWords, 'budget', budgetMax, 'itemid', itemId);
})

app.listen(8080, ()=>{
    console.log('server listening on port 8080');
});






