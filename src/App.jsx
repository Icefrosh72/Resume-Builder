// App.js
import React from 'react';
import Header from './component/header/Header';
import Form from './component/form/form';
import Preview from './component/preview/preview.jsx';
import Export from './component/export/export';

function App() {
    return (
        <div>
            <Header />
            <Form />
            <Preview />
            <Export />
        </div>
    );
}

export default App;
