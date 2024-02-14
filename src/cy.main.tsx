import { createRoot } from 'react-dom/client';
import { CreateApp } from './setup';

const root = createRoot(document.getElementById('root')!);
root.render(<CreateApp />);
