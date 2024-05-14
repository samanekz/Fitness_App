import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import Home from "./pages/home";
import Programs from "./pages/programs";
import Program from "./pages/program";
import Profile from "./pages/profile";
import Excercise from "./pages/excercise";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clv11s3hv000008l3bgw08azj/master",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/program/:id",
    element: <Program />,
  },
  {
    path: "/excercise",
    element: <Excercise />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
