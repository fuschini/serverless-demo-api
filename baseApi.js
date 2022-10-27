module.exports.handler = async (event) => {
  console.log(`Request IP address: ${event?.requestContext?.http?.sourceIp}\nRequest timestamp: ${event?.requestContext?.time}`);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello Lunch and Learn participant!",
        input: event
      },
      null,
      2
    ),
  };
};