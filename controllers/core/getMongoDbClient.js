const {
    MongoClient
} = require("mongodb");
module.exports = async (uri = `mongodb://127.0.0.1:${process.env.DB_PORT || 63883}/`,db="prod") => {
    try {
        const dbClient = await new MongoClient(uri)
        return (await dbClient.connect()).db(db)
    } catch (error) {
        console.log("error");
        console.log(error);
        return null;
    }
}