import Home from "./pages/Home";

const App = () => {
  return <Home />;
};

const AppWrapper = () => (
  // <Provider store={store}>
  <App />
  // </Provider>
);

export default AppWrapper;