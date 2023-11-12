import { HelmetProvider } from "react-helmet-async";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </HelmetProvider>
  );
}

export default App;
