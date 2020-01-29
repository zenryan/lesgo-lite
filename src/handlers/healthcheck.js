/* eslint-disable import/prefer-default-export */
const data = {
  status: 'OK',
  data: {
    message: 'healthcheck: OK',
  },
};

export const handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    statusDescription: '200 OK',
    headers: { 'Set-cookie': 'cookies', 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  return callback(null, response);
};
