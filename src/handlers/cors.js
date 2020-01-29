/* eslint-disable import/prefer-default-export */

import config from 'Config/cors';

const headers = {
  'Access-Control-Allow-Origin': config.allowOrigin,
  'Access-Control-Allow-Methods': config.allowMethods,
  'Access-Control-Allow-Headers': config.allowHeaders,
};

const data = {
  status: 'CORS Pre-flight request OK',
};

export const handler = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers,
    body: JSON.stringify(data),
  };

  return callback(null, response);
};
