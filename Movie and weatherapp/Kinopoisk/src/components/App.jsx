import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Nav } from "./Nav";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"))
const Cast = lazy(() => import(("../components/Cast")))
const Reviews = lazy(() => import("../components/Reviews"))


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Suspense fallback={<div className="suspense">Loading...</div>}><Home /></Suspense>} />
        <Route path="movies" element={<Suspense fallback={<div className="suspense">Loading...</div>}><Movies /></Suspense>} />
          <Route path="movies/:id" element={<Suspense fallback={<div className="suspense">Loading...</div>}><MoviesDetails /></Suspense>}>
            <Route path='cast' element={<Suspense fallback={<div className="suspense">Loading...</div>}><Cast /></Suspense>}/>
            <Route path='reviews' element={<Suspense fallback={<div className="suspense">Loading...</div>}><Reviews /></Suspense>}/>
          </Route>
        <Route path="*" element={<Suspense fallback={<div className="suspense">Loading...</div>}>{<Navigate to="/"/>}</Suspense>}/>
      </Route>
    </Routes>
  )
}




/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};*/
