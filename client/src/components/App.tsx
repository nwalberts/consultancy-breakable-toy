// eslint-disable-next-line import/order
import { hot } from "react-hot-loader/root";
// eslint-disable-next-line import/order
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./home/Home";
import { TopBar } from "./layout/TopBar";
import { SquidForm } from "./squids/SquidForm";
import { SquidList } from "./squids/SquidList";
import { SquidDetailsPage } from "./squids/SquidDetailsPage";
import "../style/main.pcss";

const App: React.FC = () => {
  /*
  Defaults:
  - retry: false because we don't want to retry on network errors
  - refetchOnWindowFocus: true because we want to refetch data on window focus -- this easily hides
    bugs in development
  */
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false, staleTime: Infinity } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/squids/:id">
            <SquidDetailsPage />
          </Route>
          <Route exact path="/squids" component={SquidList} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default hot(App);
