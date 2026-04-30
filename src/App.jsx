import { useState, useEffect } from 'react';
import { initialProblems } from './data/problems';
import ReferenceView from './ReferenceView';
import './index.css';

function App() {
  const [activeView, setActiveView] = useState('tracker'); // 'tracker' or 'reference'
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
            />
          </div>
        </div>
      )}
    </div>
  );
}

function ProblemDetail({ problem, onSave }) {
  const [notes, setNotes] = useState(problem.notes || '');
  const [status, setStatus] = useState(problem.status || 'todo');
  const [confidence, setConfidence] = useState(problem.confidence || 'low');

  const handleSave = () => {
    onSave({
      ...problem,
      notes,
      status,
      confidence,
      lastReviewDate: new Date().toISOString()
    });
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
        />
      </div>

      <button className="btn btn-primary" style={{width: '100%'}} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default App;
