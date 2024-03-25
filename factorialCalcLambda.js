export const handler = async (event) => {
  const number = event.queryStringParameters?.number; // Extract number from event object
 
  try {
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