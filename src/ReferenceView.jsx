import React from 'react';
import { dsReference } from './data/reference';

function ReferenceView() {
  return (
    <div className="reference-container">
      <h2 style={{marginBottom: '1.5rem'}}>Data Structures Cheat Sheet</h2>
      <div className="reference-grid">
        {dsReference.map((ds, idx) => (
          <div key={idx} className="problem-card" style={{cursor: 'default', height: 'auto'}}>
            <div className="problem-header">
              <span className="problem-category">{ds.type}</span>
            </div>
            <div className="problem-title" style={{fontSize: '1.4rem', color: 'var(--primary-color)'}}>
              {ds.name}
            </div>
            <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>{ds.description}</p>
            
            <div className="complexity-tag" style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
              {Object.entries(ds.complexity).map(([key, val]) => (
                <span key={key} style={{background: '#eee', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem'}}>
                  {key}: <strong>{val}</strong>
                </span>
              ))}
            </div>

            <div style={{marginBottom: '1rem'}}>
              <div style={{fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem'}}>C++ Snippet</div>
              <pre style={{background: '#2d2d2d', color: '#ccc', padding: '0.8rem', borderRadius: '4px', fontSize: '0.8rem', overflowX: 'auto'}}>
                {ds.cpp}
              </pre>
            </div>

            <div>
              <div style={{fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.3rem'}}>Python Snippet</div>
              <pre style={{background: '#2d2d2d', color: '#ccc', padding: '0.8rem', borderRadius: '4px', fontSize: '0.8rem', overflowX: 'auto'}}>
                {ds.python}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReferenceView;
