
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import SmoothScroll from './components/SmoothScroll';
import { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const children = useRoutes(routes);

  return (
    <ThemeProvider>
      {/* <SmoothScroll> */}
        <Suspense fallback={null}>
          {children}
        </Suspense>
      {/* </SmoothScroll> */}
    </ThemeProvider>
  )
}

export default App
