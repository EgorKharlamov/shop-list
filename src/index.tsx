import { generateHydrationScript, hydrate, render, renderToString, renderToStringAsync } from 'solid-js/web';
import 'tailwindcss/tailwind.css';
import { Router } from '@solidjs/router';
import App from '@/App';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement,
);

