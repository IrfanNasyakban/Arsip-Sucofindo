/* eslint-disable react/jsx-no-target-blank */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListData from './components/listData';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailData from './components/DetailData';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <>
            <Navbar/>
            <ListData/>
            <Footer/>
          </>
        )} />
        <Route path="/:id" element={(
          <>
            <Navbar/>
            <DetailData/>
            <Footer/>
          </>
        )} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
