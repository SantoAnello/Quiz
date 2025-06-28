import fetch from 'node-fetch';

export default async (event, context) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxnGXCh1yUR7yF96eFC41fVlkT_xSqs7S5TPtx0B8G-r7ItlhAYosRLHXcdurGfCjLaJw/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: event.body
      }
    );

    const data = await response.json();

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
