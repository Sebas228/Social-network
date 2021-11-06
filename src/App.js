import { AuthProvider } from './context/AuthContext';

import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
