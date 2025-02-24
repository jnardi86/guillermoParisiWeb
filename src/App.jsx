import RootProvider from './core/providers/RootProvider'
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";
import PopupPacientes from './components/popUp/PopupPacientes';

function App() {

  return (
    <RootProvider>
      <PopupPacientes/>
      <RouterProvider router={appRouter} />
    </RootProvider>
  )
}

export default App
