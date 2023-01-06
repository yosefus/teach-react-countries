// import Flex from './Flex';
// import Done from './Done';

import './App.css';
import Countries from './Class';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Country from './pages/Country';
import Login from './pages/Login';
import Layout from './layout/Layout';

function App() {

  return (
    <div className="App">
      <Layout>
        <>
          <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route index element={<>home</>} />
              <Route path='countries'>
                <Route index element={<Countries />} />
                <Route path=':countryCode' element={<Country />} />
                {/* <Route path=':countryCode' element={<CountryState />} /> */}
              </Route>
              <Route path='about'>
                <Route index element={<>about us</>} />
                <Route path='user' element={<>about us user</>} />
              </Route>
              <Route path='*' element={<>404 page</>} />
            </Routes>
          </div>
        </>
      </Layout>
    </div>
  );
}

export default App;


{/* <Done /> */ }
{/* <Class /> */ }
{/* <Flex /> */ }