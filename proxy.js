import fetch from 'node-fetch';

export default async (event, context) => {
  try {
    const body = event.body && typeof event.body === "string"
      ? JSON.parse(event.body)
      : event.body;

    const googleResponse = await fetch(
      'https://script.google.com/macros/s/AKfycbxJbqK3GJJ2RmDVavTiEtzJ_gkcVmJZW_hQ4zxShOWGbZ24b7FZ4MEY6_9Oszqi1ErK/exec',
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
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};
