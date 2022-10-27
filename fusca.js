module.exports.handler = async (event) => {
  console.log(`Request IP address: ${event?.requestContext?.http?.sourceIp}\nRequest timestamp: ${event?.requestContext?.time}`);

  const imageURL = 'https://picsum.photos/200/300'

  return {
    statusCode: 200,
    headers: { "content-type": "text/html" },
    body: `<html><img src="${imageURL}"></html>`
  };
};