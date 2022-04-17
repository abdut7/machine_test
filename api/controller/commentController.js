const {
    creatCommentUsecase,
    getCommentUsecase
} = require('../usecase/commentUsecase')
const createCommentController = async ({
    body,
    ...header
}) => {
    try {
        return {
            body: await creatCommentUsecase({
                body
            })
        }
    } catch (error) {
        return {
            statusCode: 401,
            body: {
                "message": "fails"
            }
        }
    }
}
const getCommentController = async ({
    body,
    ...header
}) => {
    try {
        return {
            body: await getCommentUsecase({
                body
            })
        }
    } catch (error) {
        return {
            statusCode: 401,
            body: {
                "message": "fails"
            }
        }
    }
}
module.exports = {
    createCommentController,
    getCommentController
}