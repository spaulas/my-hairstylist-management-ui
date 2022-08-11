import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "@app/App";

// TODO clean up!
const mount = (el: ReactDOM.Container | null, { onNavigate, defaultHistory, initialPath }: any) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  if (onNavigate) {
    history.listen(() => {
      onNavigate(history.location);
    });
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({
      location: { pathname: nextPathname },
    }: {
      location: { pathname: string };
    }) {
      const { pathname } = history.location;

      if (nextPathname !== pathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#management-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
