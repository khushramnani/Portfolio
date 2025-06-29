
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { ReactLenis } from 'lenis/react'
import { Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const children = useRoutes(routes);

  return (
    <ThemeProvider>
      <ReactLenis root options={{ 
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false
      }}>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </ReactLenis>
    </ThemeProvider>
  )
}

export default App
