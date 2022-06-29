import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'semantic-ui-css/semantic.min.css'
import MainMenu from "./Menu";

//Fix ker ni hotelo prikazovati ikon
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainMenu />
  </React.StrictMode>
);


