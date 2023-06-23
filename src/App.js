import './App.css';
import {
  Routes,
  Route,
  useRouteError,
  BrowserRouter
} from "react-router-dom"
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';



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

    </Routes>
   
   </BrowserRouter>
  );
}

export default App;
