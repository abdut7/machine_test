const getMongoDb = require('../../core/getMongoDbClient')
const createLikeEntity = require('../entity/likeEntity')
module.exports = async ({
    body
}) => {
    try {
        const DB = await getMongoDb();
        if (!DB)
            console.log("FAILS")
        const likeEntity = await createLikeEntity(body);
        if (likeEntity.fail) {
            return likeEntity
        }
        if (body.status === 'unlike') {
            const result = await DB.collection("likes").deleteOne(likeEntity.filter)
            if (result)
                return {
                    message: "UNLIKED"
                }
        }
        const result = await DB.collection("likes").updateOne(likeEntity.filter, likeEntity.data, {
            upsert: true
        });;
        if (result)
            return {
                message: "LIKED"
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