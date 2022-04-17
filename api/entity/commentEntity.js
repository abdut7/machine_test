module.exports = (body) => {
    if (!body.userId)
        return {
            fail: 1,
            userId: 'userId is missing'
        }
    if (!body.content)
        return {
            fail: 1,
            content: 'content is missing'
        }
    return body
}