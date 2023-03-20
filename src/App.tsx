import type { Component } from 'solid-js';
import { Header } from '@/components/Header';
import { Router } from '@/router';

const App: Component = () => {
  return (
    <>
      <Header />
      <Router />
    </>
  );
};

export default App;
