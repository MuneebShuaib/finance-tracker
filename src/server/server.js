const {config} = require('')
dotenv.config();


const {MongoClient} = require('mongodb');

async function main(){

    const URI = process.env.URI;
    const client = new MongoClient(URI);

    async function listDatabases(client){
        databasesList = await client.db().admin().listDatabases();
    
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));

    };
    
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await  listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}
main().catch(console.error)



