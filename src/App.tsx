import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/search';
import Kakaopay from './pages/kakaopay';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Search />
            <Kakaopay />
        </BrowserRouter>
    );
}
