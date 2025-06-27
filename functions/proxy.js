import fetch from 'node-fetch';

export default async (event, context) => {
  try {
    const body = JSON.parse(event.body);

    const googleResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbwauTT2Z-7k00JDjb4q6_ZR0q4fGGMW3cNTWcKw_zTT3ecYgC8xWso8AebH-kPjjCgX/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      }
    );

    const data = await googleResponse.json();

return new Response(
  JSON.stringify(data),
  {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }
);


  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
