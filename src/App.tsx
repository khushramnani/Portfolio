
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import SmoothScroll from './components/SmoothScroll'
import { Suspense } from 'react';
function App() {
  const children = useRoutes(routes);

  return (
    <>
      <SmoothScroll>
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </SmoothScroll>
    </>
  )
}

export default App
