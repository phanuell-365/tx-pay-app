import React from 'react';

export const MenuPanel: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <>
      <div className="grid bg-base-100 shadow-lg">
      <div className="p-3">
        <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
          <p className="font-semibold text-base-content">Insights</p>
          <p className="text-primary">Measure actions your users take</p>
        </a>
        <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
          <p className="font-semibold text-base-content">Automations</p>
          <p className="text-primary">Create your own targeted content</p>
        </a>
        <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
          <p className="font-semibold text-base-content">Reports</p>
          <p className="text-primary">Keep track of your growth</p>
        </a>
      </div>
      <div className="p-3">
        <a className="block rounded-lg px-3 py-2 transition hover:bg-white/5" href="#">
          <p className="font-semibold text-base-content">Documentation</p>
          <p className="text-primary">Start integrating products and tools</p>
        </a>
      </div>
      </div>
    </>
  );
};
