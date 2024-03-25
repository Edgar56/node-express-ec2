
const authorizedUsers = process.env.USERS?.split(',') || []; // Handle missing environment variable

export const handler = async (event, context, callback) => {
 

  const username = event.queryStringParameters?.username; // Extract username from query string

  if (!username) {
    return {
      statusCode: 400, // Bad request
      body: JSON.stringify({ message: "Missing username parameter" }),
    };
  }

  if (!authorizedUsers.includes(username)) {
    callback(null, generatePolicy('user', 'Deny', event.methodArn));

  }

  // User is authorized, proceed with logic (replace with your actual logic)
  callback(null, generatePolicy('user', 'Allow', event.methodArn));

};

// Help function to generate an IAM policy
var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
    
    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument = {};
        policyDocument.Version = '2012-10-17'; 
        policyDocument.Statement = [];
        var statementOne = {};
        statementOne.Action = 'execute-api:Invoke'; 
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
}