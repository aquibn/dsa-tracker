import { useState, useEffect } from 'react';
import { initialProblems } from './data/problems';
import ReferenceView from './ReferenceView';
import { askAI } from './lib/ai';
import './index.css';

function App() {
  const [activeView, setActiveView] = useState('tracker'); 
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const [aiProvider, setAiProvider] = useState(() => localStorage.getItem('ai_provider') || 'openai');
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('ai_api_key') || '');

  const [problems, setProblems] = useState(() => {
    const saved = localStorage.getItem('dsaTrackerState_v2');
    return saved ? JSON.parse(saved) : initialProblems;
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [selectedDay, setSelectedDay] = useState('All');

  useEffect(() => {
    localStorage.setItem('dsaTrackerState_v2', JSON.stringify(problems));
  }, [problems]);

  const saveSettings = (newKey, newProvider) => {
    setApiKey(newKey);
    setAiProvider(newProvider);
    localStorage.setItem('ai_api_key', newKey);
    localStorage.setItem('ai_provider', newProvider);
    setIsSettingsOpen(false);
  };

  const updateProblem = (updatedProblem) => {
    setProblems(problems.map(p => 
      p.id === updatedProblem.id ? updatedProblem : p
    ));
    setSelectedProblem(null);
  };

  const filteredProblems = problems.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         p.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDay = selectedDay === 'All' || p.day === parseInt(selectedDay);
    return matchesSearch && matchesDay;
  });

  const stats = {
    total: problems.length,
    completed: problems.filter(p => p.status === 'done').length,
    review: problems.filter(p => p.status === 'review').length,
  };

  const days = ['All', ...new Set(problems.map(p => p.day).filter(Boolean))].sort((a, b) => a - b);

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>DSA 30-Day Mastery</h1>
          <p style={{color: 'var(--text-muted)'}}>200 Problems Roadmap</p>
        </div>
        <div className="nav-buttons">
          <button 
            className={`btn ${activeView === 'tracker' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveView('tracker')}
          >
            Tracker
          </button>
          <button 
            className={`btn ${activeView === 'reference' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveView('reference')}
          >
            DS Reference
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => setIsSettingsOpen(true)}
            title="Settings"
          >
            ⚙️
          </button>
        </div>
      </header>

      {activeView === 'tracker' ? (
        <>
          <div className="stats-container">
            <div className="stat-card">
              <h3>Progress</h3>
              <div className="value">{Math.round((stats.completed / stats.total) * 100)}%</div>
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>{stats.completed} / {stats.total}</div>
            </div>
            <div className="stat-card">
              <h3>Needs Review</h3>
              <div className="value" style={{color: 'var(--warning)'}}>{stats.review}</div>
            </div>
            <div className="stat-card">
              <h3>Daily Target</h3>
              <div className="value">~7</div>
              <div style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>Problems / Day</div>
            </div>
          </div>

          <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
            <div style={{flex: 2}}>
              <input 
                type="text" 
                className="search-bar" 
                style={{marginBottom: 0}}
                placeholder="Search problems or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div style={{flex: 1}}>
              <select 
                className="search-bar" 
                style={{marginBottom: 0}}
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
              >
                {days.map(day => (
                  <option key={day} value={day}>{day === 'All' ? 'Filter by Day' : `Day ${day}`}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="problems-grid">
            {filteredProblems.map(problem => (
              <div 
                key={problem.id} 
                className="problem-card"
                onClick={() => setSelectedProblem(problem)}
              >
                <div className="problem-header">
                  <span className="problem-category">Day {problem.day} • {problem.category}</span>
                  <span className={`status-badge status-${problem.status}`}>
                    {problem.status === 'done' ? 'Done' : problem.status === 'review' ? 'Review' : 'Todo'}
                  </span>
                </div>
                <div className="problem-title">
                  <span style={{color: 'var(--primary-color)', marginRight: '0.5rem'}}>#{problem.id}</span>
                  {problem.title}
                </div>
                <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between'}}>
                  <span>Difficulty: {problem.difficulty}</span>
                  {problem.confidence && <span>{problem.confidence.toUpperCase()}</span>}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <ReferenceView />
      )}

      {selectedProblem && (
        <div className="modal-overlay" onClick={() => setSelectedProblem(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProblem(null)}>&times;</button>
            <ProblemDetail 
              problem={selectedProblem} 
              onSave={updateProblem} 
              apiKey={apiKey}
              provider={aiProvider}
            />
          </div>
        </div>
      )}

      {isSettingsOpen && (
        <div className="modal-overlay" onClick={() => setIsSettingsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsSettingsOpen(false)}>&times;</button>
            <h2>AI Settings</h2>
            
            <div className="form-group" style={{marginTop: '1.5rem'}}>
              <label>AI Provider</label>
              <select 
                className="form-control" 
                value={aiProvider} 
                onChange={(e) => setAiProvider(e.target.value)}
              >
                <option value="openai">OpenAI (ChatGPT)</option>
                <option value="gemini">Google Gemini</option>
              </select>
            </div>

            <div className="form-group">
              <label>{aiProvider === 'openai' ? 'OpenAI' : 'Gemini'} API Key</label>
              <input 
                type="password" 
                className="form-control" 
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder={`Paste your ${aiProvider} key here...`}
              />
              <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>
                Your key is saved locally in your browser and never sent to our servers.
              </p>
            </div>
            
            <button className="btn btn-primary" style={{width: '100%'}} onClick={() => saveSettings(apiKey, aiProvider)}>
              Save Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProblemDetail({ problem, onSave, apiKey, provider }) {
  const [notes, setNotes] = useState(problem.notes || '');
  const [status, setStatus] = useState(problem.status || 'todo');
  const [confidence, setConfidence] = useState(problem.confidence || 'low');
  
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [hintLevel, setHintLevel] = useState(1);

  const handleSave = () => {
    onSave({
      ...problem,
      notes,
      status,
      confidence,
      lastReviewDate: new Date().toISOString()
    });
  };

  const handleAiAction = async (type) => {
    setIsAiLoading(true);
    setAiResponse('');
    try {
      let prompt = '';
      if (type === 'intuition') {
        prompt = `Explain the intuition and pattern for the LeetCode problem "${problem.title}" (${problem.category}). Do not provide the full code, focus on the "why" and the thought process.`;
      } else if (type === 'review') {
        if (!notes.trim()) {
          throw new Error('Please write some notes or code in the box first for me to review!');
        }
        prompt = `Review the following notes/code for the LeetCode problem "${problem.title}":\n\n${notes}\n\nProvide feedback on time/space complexity, point out potential bugs, and suggest improvements. Be concise.`;
      } else if (type === 'hint') {
        prompt = `Provide hint level ${hintLevel} for the LeetCode problem "${problem.title}". 
        Level 1: What Data Structure to use. 
        Level 2: The core logic/algorithm strategy. 
        Level 3: Brief pseudocode. 
        Current level is ${hintLevel}. Ensure the response is concise and helpful.`;
        if (hintLevel < 3) setHintLevel(hintLevel + 1);
        else setHintLevel(1); 
      }

      const response = await askAI(prompt, apiKey, provider);
      setAiResponse(response);
    } catch (err) {
      setAiResponse(`❌ Error: ${err.message}`);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{marginBottom: '0.5rem'}}>{problem.title}</h2>
      <div style={{marginBottom: '1.5rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <span>{problem.category} | {problem.difficulty}</span>
        {problem.link && (
          <a 
            href={problem.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{
              padding: '0.4rem 0.8rem', 
              fontSize: '0.8rem', 
              textDecoration: 'none',
              background: '#eee',
              color: '#333'
            }}
          >
            View on LeetCode ↗
          </a>
        )}
      </div>

      <div className="form-group">
        <label>Status</label>
        <select 
          className="form-control" 
          value={status} 
          onChange={e => setStatus(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="review">Needs Review</option>
          <option value="done">Completed</option>
        </select>
      </div>

      <div className="form-group">
        <label>Confidence (Spaced Repetition)</label>
        <div className="confidence-buttons">
          {['Low', 'Medium', 'High'].map(level => (
            <button
              key={level}
              className={`confidence-btn ${confidence === level.toLowerCase() ? 'active' : ''}`}
              onClick={() => setConfidence(level.toLowerCase())}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Notes & Pattern Understanding</label>
        <textarea 
          className="form-control" 
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Write down the intuition, time complexity, space complexity, and common pitfalls..."
          style={{minHeight: '150px'}}
        />
      </div>

      <div className="ai-section" style={{marginTop: '2rem', paddingTop: '1.5rem', borderTop: '2px solid var(--border-color)'}}>
        <h3 style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
          ✨ AI Assistant
        </h3>
        <div className="btn-group" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
          <button 
            className="btn btn-outline" 
            style={{flex: 1, fontSize: '0.85rem', padding: '0.5rem'}}
            onClick={() => handleAiAction('intuition')}
            disabled={isAiLoading}
          >
            💡 Intuition
          </button>
          <button 
            className="btn btn-outline" 
            style={{flex: 1, fontSize: '0.85rem', padding: '0.5rem'}}
            onClick={() => handleAiAction('review')}
            disabled={isAiLoading}
          >
            🔍 Review
          </button>
          <button 
            className="btn btn-outline" 
            style={{flex: 1, fontSize: '0.85rem', padding: '0.5rem'}}
            onClick={() => handleAiAction('hint')}
            disabled={isAiLoading}
          >
            🪜 Hint {hintLevel}
          </button>
        </div>

        {(aiResponse || isAiLoading) && (
          <div className="ai-response" style={{
            background: '#f0f4ff',
            padding: '1rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.9rem',
            border: '1px solid #d0dbff',
            minHeight: '60px',
            position: 'relative'
          }}>
            {isAiLoading ? (
              <div className="loading-dots">Thinking...</div>
            ) : (
              <div style={{whiteSpace: 'pre-wrap'}}>{aiResponse}</div>
            )}
          </div>
        )}
      </div>

      <button className="btn btn-primary" style={{width: '100%', marginTop: '2rem'}} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default App;
