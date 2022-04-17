#  About
#### Execution of Production build
* Start the 
   * ``node app.js``
* API Test
   * ``npm run test .\test\api_flow.spec.js``

 ###### Create Profile
   * URL: http://localhost:3000/api/create_profile
   * Methode :POST
   * Request body
       ``{
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
             }``
   * Response body
        ``{
              "id": 2,
              "message": "NEW PROFILE CREATED",
              "blnAPIStatus": true
              }``
   ###### Create Comments
   * URL: 127.0.0.1:3000/api/create_comment
   * Methode :POST
   * Request body
          ``{
                "userId":1,
                "content":"test2.........."
             }``
   * Response body
           ``{ 
              "message": "NEW COMMENT ADDED",
              "blnAPIStatus": true
              }``
  ###### Get List of  comments
   * URL: http://127.0.0.1:3000/api/get_comment
   * Methode :POST
   * Response body
       ``{
              "list": [
           {
            "_id": "625c10b1d4d27fe424ef6eef",
            "userId": 1,
            "profile": {
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
             },
            "likes": [
               {
                "_id": "625c10b2f29eb118329684e4",
                "userId": 1
               }
             ],
            "likeCount": 1
           },
           {
            "_id": "625c10b1d4d27fe424ef6ef0",
            "userId": 2,
            "profile": {
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
             },
            "likes": [],
            "likeCount": 0
                   }
                ],
               "blnAPIStatus": true
               }``
  ###### Create Like 
   * URL: 127.0.0.1:3000/api/create_comment
   * Methode :POST
   * Request body
          ``{
               "userId":2,
               "commentID":"625bdc7da21aad6a51c71c99"
             }``
   * Response body
           ``{ 
              "message": "LIKED",
              "blnAPIStatus": true
              }``
    ###### UNLike 
   * URL: 127.0.0.1:3000/api/create_comment
   * Methode :POST
   * Request body
          ``{
               "status":"unlike",
               "userId":2,
               "commentID":"625bdc7da21aad6a51c71c99"
             }``
   * Response body
           ``{ 
              "message": "UNLIKED",
              "blnAPIStatus": true
              }``
## Environment Dependancy
 * Node
 * Mocha

## PART 3 Automation flow Testing 
   * Run  ``npm run test .\test\api_flow.spec.js``

## TODO
 * unit test

     
 