import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import TableComponent from './components/TableComponent';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/userInfo" element={<TableComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
