// App.js
import React from 'react';
import { useState } from 'react';
import Header from './component/header/Header.jsx';
import Form from './component/form/form.jsx';
import Preview from './component/preview/preview.jsx';
import Export from './component/export/export.jsx';

function App() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        education: '',
        experience: '',
        skills: '',
    });
    const [selectedTheme, setSelectedTheme] = useState('default');

    const handleFormChange = (newFormData) => {
        setSelectedTheme(newFormData);
    };

    const handleThemeChange = (theme) => {
        setSelectedTheme(theme);
    }
    return (
        <div>
            <Header />
            <Form onFormChange={handleFormChange} />
            <Preview formData={formData} selectedTheme={selectedTheme} />
            <SaveExport formData={formData} />
            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <select onChange={(e) => handleThemeChange(e.target.value)}>
                    <option value="default">Default Theme</option>
                    <option value="dark">Dark Theme</option>
            </div>
        </div>
    );
}

export default App;
