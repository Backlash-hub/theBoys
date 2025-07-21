import React from "react";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

export default function App() {
  const path = window.location.pathname;

  let Page;
  switch (path) {
    case "/about":
      Page = About;
      break;
    case "/":
    default:
      Page = Dashboard;
      break;
  }

  return (
    <main>
      <Page />
    </main>
  );
}
