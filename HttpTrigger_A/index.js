module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        status: 200,
        body: "This is A"
    };

  // if (req.query.name || (req.body && req.body.name)) {
  //   context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: "Hello A" + (req.query.name || req.body.name)
  //   };
  // } else {
  //   context.res = {
  //     status: 400,
  //     body: "Please pass a name on the query string or in the request body"
  //   };
  // }
};