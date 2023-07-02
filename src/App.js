import './App.css';
import {
  Routes,
  Route,
  useRouteError,
  BrowserRouter
} from "react-router-dom"
import Home from './pages/Home';
import Signin from './pages/Signin';
import MainLayout from './layouts/MainLayout';
import Profile  from './pages/Profile';



const ErrorBoundary= () => {

  let error = useRouteError();
  console.error(error);
  return <div> Erreur 404 </div>
}


function App() {
  return (
   
      <BrowserRouter>

      <Routes>

        <Route path="/" element={<MainLayout/>}  errorElement={<ErrorBoundary/>}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="/signin" element={<MainLayout/>}  errorElement={<ErrorBoundary/>}>
          <Route index element={<Signin/>} />
        </Route>
        <Route path="/profile/:id" element={<MainLayout/>} errorElement={<ErrorBoundary/>}>
            <Route index element={<Profile />} />
        </Route>


      </Routes>
    
    </BrowserRouter>

  );
}

export default App;
