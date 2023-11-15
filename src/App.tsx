import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/search';
import Kakaopay from './pages/kakaopay';
import Search1 from './pages/Search_1';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Search />
            <Search1 />
            <Kakaopay />
        </BrowserRouter>
    );
}
