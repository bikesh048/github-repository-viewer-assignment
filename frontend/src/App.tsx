import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './layouts/Home';
import SearchResult from './layouts/SearchResult';
import AppContext from './utils/AppContext';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:query/:startIndex' element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
