const authorizedUsers = process.env.USERS?.split(',') || []; // Handle missing environment variable

export const handler = async (event, context) => {
  const username = event.queryStringParameters?.username; // Extract username from query string

  // Authorization Check (adapted from first Lambda)
  if (!username) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing username parameter" }),
    };
  }

  if (!authorizedUsers.includes(username)) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized access" }),
    };
  }

  // Factorial Calculation (adapted from second Lambda)
  try {
    const number = parseInt(event.queryStringParameters?.number); // Extract and convert number

    if (isNaN(number)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid number parameter" }),
      };
    }

    const factorial = calculateFactorial(number);
    return { statusCode: 200, body: JSON.stringify(factorial) };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: JSON.stringify('Error calculating factorial') };
  }
};

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * calculateFactorial(number - 1);
}
