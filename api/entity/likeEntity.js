const {
    ObjectId
} = require('mongodb');
module.exports = (body) => {
    if (!body.userId)
        return {
            fail: 1,
            userId: 'userId is missing'
        }
    if (!body.commentID)
        return {
            fail: 1,
            content: 'content is missing'
        }
    return {
        filter: {
            userId: body.userId,
            commentID: new ObjectId(body.commentID)
        },
        data: {
            $set: {
                userId: body.userId,
                status: 'liked',
                commentID: new ObjectId(body.commentID)
            }
        }
    }
}