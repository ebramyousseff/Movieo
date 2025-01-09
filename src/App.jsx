import { Routes, Route } from 'react-router-dom';
import Layout from './componenets/Layout';
import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import DetailsPage from './pages/DetailsPage';
import SearchPage from './pages/SearchPage';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":explore" element={<ExplorePage/>}/>
        <Route path=":explore/:id" element={<DetailsPage/>}/>
        <Route path="search" element={<SearchPage/>}/>
      </Route>
    </Routes>
  );
};

export default App;
