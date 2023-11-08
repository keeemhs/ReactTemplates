import './styles/search.css';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    const handleSearch = () => {
        const inputElement = document.querySelector('.input_search');
        if (inputElement) {
            const inputValue = (inputElement as HTMLInputElement).value;
            if (inputValue === '') {
                alert('검색어를 입력해 주세요!!');
            } else {
                alert('검색어 : ' + inputValue);
            }
        }
    };

    return (
        <div className="search_section">
            <div className="search_box">
                <div className="input_container">
                    <BiSearch className="search_icon" size={20} />
                    <input className="input_search" placeholder="검색어를 입력해주세요" />
                </div>
                <button className="button_search" onClick={handleSearch}>
                    검색
                </button>
            </div>
        </div>
    );
};

export default Search;
