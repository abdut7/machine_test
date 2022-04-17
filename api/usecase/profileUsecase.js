const getMongoDb = require('../../core/getMongoDbClient')
const validateProfile = require('../entity/profileEntity')
module.exports = async ({
    body
}) => {
    try {
        const DB = await getMongoDb();
        if(!DB)
        console.log("FAILS")
        const profileEntity = await validateProfile(body);
        if(profileEntity.fail){
            return profileEntity
        }
        const result = await DB.collection("profile").insertOne(profileEntity);
        if (result)
            return {
                id:profileEntity.id,
                message: "NEW PROFILE CREATED"
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