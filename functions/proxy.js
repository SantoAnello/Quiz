import fetch from 'node-fetch';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbzt2OV0bMY3KFvDS9iSRef7qW4Ak5FE4209wtWMy780THclhYVK4Y5aLd-Bys-vH9M7/exec',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      }
    );

    const result = await response.json();
    return res.status(200).json(result);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao enviar dados ao Google Apps Script.' });
  }
};
