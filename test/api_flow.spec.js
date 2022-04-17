const expect = require("chai").expect;
const Axios = require('axios');
const {
    before
} = require("mocha");
/**
 * 1.create some profiles
 * 2.create some comments by profile
 * 3.get list of comments
 * 4.add like for an comments
 * 5.check the like is added or not
 * 6.unlike the comment
 * 7.check unlike is working
 * 8.get list of comments using filter and sort
 * 
 */
console.log("Test Started");
const axios = Axios.create({
    baseURL: 'http://api/api/master_ab_store',
    timeout: 10000,
    withCredentials: false
});
describe("Test Started",  function () {
     describe("create an user Abdu", function () {
        const url = 'http://127.0.0.1:3000/api/create_profile'
        it("POST API call for create Abdu", async function () {
            const reqBody = {
                "name": "Abdu",
                "description": "Adolph Larrue Martinez III.",
                "mbti": "ISFJ",
                "enneagram": "9w3",
                "variant": "sp/so",
                "tritype": 725,
                "socionics": "SEE",
                "sloan": "RCOEN",
                "psyche": "FEVL",
                "image": "https://soulverse.boo.world/images/1.png"
            }
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        });
        it("POST API call for create Rahman", async function () {
            const reqBody = {
                "name": "Rahman",
                "description": "Adolph Larrue Martinez III.",
                "mbti": "INFP",
                "enneagram": "9w3",
                "variant": "sp/so",
                "tritype": 725,
                "socionics": "SEE",
                "sloan": "RCOEN",
                "psyche": "FEVL",
                "image": "https://soulverse.boo.world/images/1.png"
            }
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        });
    });
     describe("create two comments by user", function () {
        const url = 'http://127.0.0.1:3000/api/create_comment'
        it("POST API call for create comment by Abdu", async function () {
            const reqBody = {
                "userId": 1,
                "content": "This is comment by Abdu"
            }
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        })
        it("POST API call for create comment by Rahman", async function () {
            const reqBody = {
                "userId": 2,
                "content": "This is comment by Rahman"
            }
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        })
    });
     describe("Get list of comments list ", function () {
        const url = 'http://127.0.0.1:3000/api/get_comment'
        const likeUrl = 'http://127.0.0.1:3000/api/create_like_unlike'
        let commentID1,commentID2;
        it("Get list of comments list ", async function () {
            const reqBody = {}
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(async response => {
                    console.log("Response  : \n", response.data);
                    commentID1 = response.data.list[0]['_id'];
                    commentID2 = response.data.list[1]['_id'];
                });
        });
        it("Add likes for first  comments by Abdu", async function () {
            const likeReq = {
                "userId": 1,
                commentID:commentID1
            }
            console.log("Request body : \n", likeReq);
            await axios.post(likeUrl, likeReq)
                .then(async response => {
                    console.log("Response  : \n", response.data);
                });
        })
        it("Add likes for secound comments by Abdu", async function () {
            const likeReq = {
                "userId": 1,
                commentID:commentID2
            }
            console.log("Request body : \n", likeReq);
            await axios.post(likeUrl, likeReq)
                .then(async response => {
                    console.log("Response  : \n", response.data);
                });
        })
        it("Show list of comments after like first and secound item", async function () {
            await axios.post(url, {})
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        })
        it("Unlikes the secound comments by Abdu", async function () {
            const likeReq = {
                "userId": 1,
                commentID:commentID2,
                status:'unlike'
            }
            console.log("Request body : \n", likeReq);
            await axios.post(likeUrl, likeReq)
                .then(async response => {
                    console.log("Response  : \n", response.data);
                });
        })
        it("Show list of comments after unlike the secound item", async function () {
            await axios.post(url, {})
                .then(response => {
                    console.log("Response  : \n", response.data);
                });
        })
    });
     describe("Get list of comments list apply filter ", function () {
        const url = 'http://127.0.0.1:3000/api/get_comment'
        it("Get list of comments list apply filter", async function () {
            const reqBody = {}
            console.log("Request body : \n", reqBody);
            await axios.post(url, reqBody)
                .then(async response => {
                    console.log("Response  : \n", response.data);
                });
        });
    });
});