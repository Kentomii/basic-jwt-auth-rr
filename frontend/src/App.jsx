import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import * as Auth from './pages/Auth/index';
import ProtectRoutes from "./components/ProtectRoutes";
import { UserProvider } from "./context/UserContext";

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>

      <Router>
        <UserProvider>
          <Routes>
              <Route index element={<div>App</div>} />
              <Route element={<ProtectRoutes />}>
                <Route path='/profile' element={<Auth.ProfilePage />} />
              </Route>
              <Route path="/login" element={<Auth.LoginPage />} />
              <Route path="/register" element={<Auth.RegisterPage />} />
          </Routes>
        </UserProvider>

      </Router>
     </QueryClientProvider>
  )
}

export default App