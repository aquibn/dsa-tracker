export async function askAI(prompt, apiKey, provider = 'openai') {
  if (!apiKey) {
    throw new Error(`Please add your ${provider === 'openai' ? 'OpenAI' : 'Gemini'} API Key in Settings first.`);
  }

  if (provider === 'openai') {
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to connect to OpenAI API');
    }
    return data.choices?.[0]?.message?.content || 'No response received.';
  } else {
    // Legacy Gemini support
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
        if (response.ok) return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';
        lastError = data.error?.message || 'Unknown error';
        continue;
      } catch (err) {
        lastError = err.message;
        continue;
      }
    }
    throw new Error(lastError || 'All Gemini models failed.');
  }
}
