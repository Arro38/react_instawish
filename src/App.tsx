import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <>
      <main className=" container flex flex-col  h-screen mx-auto w-2/3 gap-3">
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
