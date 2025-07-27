import './App.css';

import { Suspense } from 'react'; // Optional toast notifications

const Fallback = () => {
  return <div>Loading...</div>;
};

function App() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <div className="app"></div>
      </Suspense>
    </>
  );
}

export default App;
