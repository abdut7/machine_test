const getMongoDb = require('../../core/getMongoDbClient')
module.exports = async (body) => {
    if (!body.name)
        return {
            fail: 1,
            message: 'Name is missing'
        }
    //set new id 
    const DB = await getMongoDb();
    if (!DB)
        console.log("FAILS")
    const count = await DB.collection("profile").estimatedDocumentCount();;
    return {
        ...body,
        id: count + 1 || 1000,
        "name": body.name,
        "description": body.description || '',
        "mbti": body.mbti || "ISFJ",
        "enneagram": body.enneagram || "9w3",
        "variant": body.variant || "sp/so",
        "tritype": body.tritype || 725,
        "socionics": body.socionics || "SEE",
        "sloan": body.sloan || "RCOEN",
        "psyche": body.psyche || "FEVL",
        "image": body.image || "https://soulverse.boo.world/images/1.png"
    }
}