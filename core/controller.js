const makeController =  function makeController(controller,db) {
    return async (req, res) => {
        const httpRequest = await {
          body: req.body,
          query: req.query,
          params: req.params,
          ip: req.ip,
          strToken: req.strToken,
          strUserId: req.strUserId,
          method: req.method,
          timReceived: new Date(new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata'
          })),
          path: req.originalUrl,
          strAudience: (req.get("str-audience") || '').toUpperCase(),
          headers: {
            "Content-Type": req.get("Content-Type"),
            Referer: req.get("referer"),
            "User-Agent": req.get("User-Agent")
          }
        };
        await controller(httpRequest)
          .then(
            ({
              headers: headers = {
                "Content-Type": "application/json",
                "Last-Modified": new Date(new Date().toLocaleString('en-US', {
                  timeZone: 'Asia/Kolkata'
                }))
              },
              type = "json",
              statusCode: code = 200,
              body
            }) => {
              if (!body) throw new Error("EMPTY_RESPONSE");
              res.set(headers);
              res.type(type);
              if (code == 400) {
                console.log("ret")
                res.status(code).send({
                  ...body,
                  "blnAPIStatus": false
                });
              } else {
                res.status(code).send({
                  ...body,
                  "blnAPIStatus": true
                });
              }
            }
          )
          .catch(async error => {
            console.log("error",error)
            res
              .status(400)
              .set({
                "Content-Type": "application/json",
                "Last-Modified": new Date(new Date().toLocaleString('en-US', {
                  timeZone: 'Asia/Kolkata'
                }))
              })
              .send({
                "blnAPIStatus": false
              });
          });
    };
  }
  module.exports = makeController;