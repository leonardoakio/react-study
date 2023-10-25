import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';



// Criar a raiz que é o root no index.html e renderizar com render
ReactDom.createRoot(document.getElementById("root")).render(<App />);