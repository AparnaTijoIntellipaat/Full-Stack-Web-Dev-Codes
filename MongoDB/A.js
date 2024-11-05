const { MongoClient } = require('mongodb');


const uri = 'mongodb+srv://aparnatijo:EbqrG4T9J3vFzRcu@cluster0.k8ul3.mongodb.net';
const client = new MongoClient(uri);


async function run() {
    try {
        await client.connect();
        const database = client.db('gigantic_gig');
        const collection = database.collection('gigs_of_prof');


        const result = await collection.find({field: 'value'}).toArray();

        const range = await collection.find({quantity: {$gt: 15}}).toArray();


        const update = await collection.updateOne({item: 'mango'}, {$set: {quantity: 20}});

        const updateMany = await collection.updateMany({item: 'mango'}, {$inc: {lt:15}});

        const deleteT = await collection.deleteMany({quantity: {$lt: 15}})

        const aggregate = await collection.aggregate([
            {$group: {id: '$item', total: $sum: '$quantity'}}.toArray();
        ])





    } finally {
        await client.close();
    }
}


run().catch(console.error);
