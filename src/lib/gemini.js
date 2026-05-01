export async function askGemini(prompt, apiKey) {
  if (!apiKey) {
    throw new Error('Please add your Gemini API Key in Settings first.');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || 'Failed to connect to Gemini API');
  }

  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';
}
