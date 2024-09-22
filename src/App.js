
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import ErrorPage from './components/Error-page';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
// import Root from './components/root';
// import Loader from './components/Loader';

function App() {


  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
   


  
 const showAlert=(message,type,success)=>{
       setAlert({
        msg:message,
        type:type,
        success:success
       })

       setTimeout(()=>{
        setAlert(null)},2000
        
       )
  }
  
  const toggleBlueMode=()=>{
    if(mode !=='info'){
      setMode('info');
      document.body.style.backgroundColor='#9eeaf9';
      showAlert('Blue mode has been enbled','info','success');

    }
  }
  const toggleGreenMode=()=>{
    if(mode !=='success'){
      setMode('success');
      document.body.style.backgroundColor='#a3cfbb';
      showAlert('Green mode has been enbled','success','success');

    }
  }
  const toggleYellowMode=()=>{
    if(mode !=='warning'){
      setMode('warning');
      document.body.style.backgroundColor='#ffe69c';
      showAlert('Yellow mode has been enbled','warning','success');

    }
  }
  const toggleRedMode=()=>{
    if(mode !=='danger'){
      setMode('danger');
      document.body.style.backgroundColor='#f1aeb5';
      showAlert('Red mode has been enbled','danger','success');

    }
  }


  const toggleDarkMode =()=>{
    if(mode !=='dark'){
      setMode('dark');
      document.body.style.backgroundColor='#3d4348';
      showAlert('Dark mode has been enbled','dark','success');

    }
  }











  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Navbar  mode ={mode} toggleDarkMode={toggleDarkMode} toggleBlueMode={toggleBlueMode} toggleGreenMode={toggleGreenMode} toggleYellowMode={toggleYellowMode} toggleRedMode={toggleRedMode}/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/About",
      element: <About mode={mode}/>,
      
        },
        {
          path:"/",
          element:<TextArea mode={mode} showAlert={showAlert}/>
        },
      ]
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );










  return (
    <>
   
  
    </>
  );
}

export default App;
