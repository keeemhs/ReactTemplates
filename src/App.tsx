import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Search from './pages/search';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Search />
        </BrowserRouter>
    );
}
