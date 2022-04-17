const createProfileUsecase = require('../usecase/createProfile')
const createProfileController = async ({
    body,
    ...header
}) => {
    try {
        return {
            body: await createProfileUsecase({
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
    createProfileController
}