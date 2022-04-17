const getMongoDb = require('../../core/getMongoDbClient')
creatCommentUsecase = async ({
    body
}) => {
    try {
        const DB = await getMongoDb();
        if (!DB)
            console.log("FAILS")
        const result = await DB.collection("comment").insertOne(body);
        if (result)
            return {
                message: "NEW COMMENT ADDED"
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
getCommentUsecase = async ({
    filterKey,
    sortKey,
    filterValue,
    sortOrder = 1
}) => {
    try {
        const DB = await getMongoDb();
        const list = []
        const aggregateFilter = []
        if (!DB)
            console.log("FAILS")
        if (sortKey) {
            await aggregateFilter.push({
                $sort: {
                    [`profile.${sortKey}`]: sortOrder
                }
            })
        }
        if (filterKey && filterValue) {
            await aggregateFilter.push({
                $match: {
                    [`profile.${filterKey}`]: filterKey
                }
            })
        }
        const result = await DB.collection("comment").aggregate([{
                $lookup: {
                    from: "profile",
                    localField: "userId",
                    foreignField: "id",
                    as: "profile"
                }
            },
            {
                $lookup: {
                    from: "likes",
                    localField: "_id",
                    foreignField: "commentID",
                    as: "likes"
                }
            }
        ]);
        if (!result) {
            return {
                list,
                message: "NO COMMENTS"
            }
        }
        await result.forEach(item => {
            list.push({
                ...item,
                profile: item.profile[0] || {},
                likeCount: item.likes.length
            });
        });
        return {
            list
        }
    } catch (error) {
        console.log(error);
        return {
            message: "FAILED"
        }
    }
}

module.exports = {
    creatCommentUsecase,
    getCommentUsecase
}