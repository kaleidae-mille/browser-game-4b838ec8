import { useEffect, useState } from "react";

// This file is scaffolding. Rip it out and put your own thing here.
export default function App() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((v) => v + 1), 600);
    return () => clearInterval(id);
  }, []);
  return (
    <main>
      <p className="brand">Kaleidae node</p>
      <h1>{"browser game"}</h1>
      <section className="scene">
        the phenomenon waits{".".repeat((n % 4) + 1)}
      </section>
      <footer>
        <p>This is scaffolding. Gut it. Make something.</p>
      </footer>
    </main>
  );
}
