const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://aparnatijo:EbqrG4T9J3vFzRcu@cluster0.k8ul3.mongodb.net';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db('gigantic_gig');
        const collection = database.collection('gigs_of_prof');

        // Place your queries here

        // const result = await collection.find({ field: 'value' }).toArray();
        // console.log(result);

        // const result = await collection.find({ quantity: { $gt: 15 } }).toArray();
        // console.log(result);

        // const result = await collection.find({ price: 5, quantity: 16 }).toArray();
        // console.log(result);

        // const result = await collection.updateOne({ item: 'banana' }, {$set: {quantity: 20}})
        // console.log(result);

        // const result = await collection.updateMany({item: 'mango'}, {$inc: { price: 10 }});
        // console.log(result);       

        // const result = await collection.deleteMany({quantity: {$lt: 15}});
        // console.log(result);

        // const result = await collection.aggregate([
        //     {$group: {_id: '$item', totalQuantity: {$sum: '$quantity'}}}]).toArray();
        //     console.log(result);         

    } finally {
        await client.close();
    }
}

run().catch(console.error);
