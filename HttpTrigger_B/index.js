module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        status: 200,
        body: "This is B"
    };

  // if (req.query.name || (req.body && req.body.name)) {
  //   context.res = {
  //     // status: 200, /* Defaults to 200 */
  //     body: "Hello B" + (req.query.name || req.body.name) + req.header
  //   };
  // } else {
  //   context.res = {
  //     status: 400,
  //     body: "Please pass a name on the query string or in the request body"
  //   };
  // }
};