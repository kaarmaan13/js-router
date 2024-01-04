import { useEffect } from "react";
import { EVENTS } from "./consts";
import { useState } from "react";
import Page404 from "./Page404";
import { match } from "path-to-regexp";

export function Router({
  routes = [], defaultComponent: DefaultComponent = Page404
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routesParams = {}

  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    routesParams = matched.params
    return true
  })?.Component;
  return Page
    ? <Page routesParams={routesParams}  />
    : <DefaultComponent routesParams={routesParams} />;
}
