import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { Home, menu1, menu2, menu3, menu4 } from './pages';

export default function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route Component={Home} path="/" exact />
            </Switch>
        </BrowserRouter>
    );
}
