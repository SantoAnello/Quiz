import fetch from 'node-fetch';

export async function handler(event, context) {
  const response = await fetch("https://script.google.com/macros/s/AKfycbwWME98bzBYykv6x2E82Fq-cwurGN4ObeCIrE4U6QYAN0tXNbsXUfWXEEbJIqPbMYgh/exec", {
    method: "POST",
    body: event.body,
    headers: { "Content-Type": "application/json" }
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

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
