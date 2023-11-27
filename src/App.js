import './App.css';
import Addnotes from './componets/Addnotes';
import Menu from './componets/Menu';
import Navbar from './componets/Navbar';

function App() {
  return (
     <div>
            <Navbar/>
           <div className='flex'>
           {/* <Menu/> */}
            <Addnotes/>
            </div> 
            
     </div>
  );
}

export default App;
