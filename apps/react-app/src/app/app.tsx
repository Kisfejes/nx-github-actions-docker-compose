// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

export function App() {
  const [requestResult, setRequestResult] = useState('');

  async function onMakeRequestClick() {
    // const response = await fetch('http://localhost:3000');
    const response = await fetch('http://backend:3000');
    const responseText = await response.text();
    setRequestResult(responseText);
  }

  return (
    <>
      <button id="request-button" onClick={onMakeRequestClick}>
        make request!
      </button>
      <div id="result-show">result: {requestResult}</div>
    </>
  );
}

export default App;
