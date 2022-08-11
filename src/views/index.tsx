import { Route, Redirect, Switch } from "react-router-dom";
import { PUBLIC_PREFIX } from "../configs/public.config";
import PublicLayout from "../layouts/public-layout";

export default function Views() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={PUBLIC_PREFIX} />
      </Route>
      <Route path={PUBLIC_PREFIX}>
        <PublicLayout />
      </Route>
    </Switch>
  );
}
