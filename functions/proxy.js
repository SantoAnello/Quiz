// Este código cria a function no Netlify

// Primeiro, importa a função fetch (para fazer requisições HTTP)
import fetch from 'node-fetch';

export default async function handler(event, context) {
  try {
    const body = JSON.parse(event.body);

    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbwauTT2Z-7k00JDjb4q6_ZR0q4fGGMW3cNTWcKw_zTT3ecYgC8xWso8AebH-kPjjCgX/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await googleResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}

// Aqui começa o código que será chamado pelo teu HTML
exports.handler = async (event, context) => {
  try {
    // Lê o corpo enviado pelo HTML
    const body = JSON.parse(event.body);

    // Faz o POST para o Google Script
    const googleResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbwauTT2Z-7k00JDjb4q6_ZR0q4fGGMW3cNTWcKw_zTT3ecYgC8xWso8AebH-kPjjCgX/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    // Converte a resposta do Google para JSON
    const data = await googleResponse.json();

    // Retorna sucesso para o navegador
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    };

  } catch (error) {
    // Se der erro, retorna erro
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
