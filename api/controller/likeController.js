const createLikeUsecase = require('../usecase/likeUnlikeUsecase')
const createLikeController = async ({
    body,
    ...header
}) => {
    try {
        return {
            body: await createLikeUsecase({
                body
            })
        }
    } catch (error) {
        return {
            statusCode: 401,
            body: {
                "message": "fail .."
            }
        }
    }
}

module.exports = {
    createLikeController
}