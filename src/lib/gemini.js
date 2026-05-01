export async function askGemini(prompt, apiKey) {
  if (!apiKey) {
    throw new Error('Please add your Gemini API Key in Settings first.');
  }

  // List of models to try in order of preference
  const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-pro'];
  let lastError = null;

  for (const model of models) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      const data = await response.json();
      if (response.ok) {
        return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';
      }
      
      // if it's a quota or model not found error, try the next model
      lastError = data.error?.message || 'Unknown error';
      console.warn(`Model ${model} failed: ${lastError}`);
      continue; 
    } catch (err) {
      lastError = err.message;
      continue;
    }
  }

  throw new Error(lastError || 'All AI models failed to respond.');
}
