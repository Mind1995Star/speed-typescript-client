import { PUBLIC_PREFIX, TEST_PREFIX } from "../../configs/public.config";
import { Route, Switch } from "react-router-dom";
import Main from "../../pages";
// import Test from "../../pages/Test";

export default function PublicPage() {
  return (
    <Switch>
      <Route exact path={PUBLIC_PREFIX} component={Main}></Route>
      {/* <Route exact path={PUBLIC_PREFIX + TEST_PREFIX} component={Test}></Route> */}
      {/* <Route path={PUBLIC_PREFIX + MODAL_PREFIX} component={Modal}></Route> */}
    </Switch>
  );
}
