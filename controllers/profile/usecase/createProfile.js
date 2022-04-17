const getMongoDb = require('../../core/getMongoDbClient')
module.exports = async ({
    body
}) => {
    try {
        const DB = await getMongoDb();
        if(!DB)
        console.log("FAILS")
        const result = await DB.collection("profile").insertOne(body);
        console.log(result,"sad");
        if (result)
            return {
                message: "INSERTED"
            }
        else return {
            message: "FAILED"
        }
    } catch (error) {
        console.log(error);
        return {
            message: "FAILED"
        }
    }
}