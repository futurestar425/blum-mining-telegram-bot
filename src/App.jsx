import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Loading from './components/Loading';
import routes from './routes';
// import DefaultLayout from './layouts/DefaultLayout';
const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // return (
  //   <div>
  //     <Home/>
  //   </div>
  // )
  return loading ? (
    <Loading />
  ) : (
    <>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route index element={<Home />} />
            {routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loading />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
    </>
  );
}

export default App;
