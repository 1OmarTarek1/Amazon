import { useTranslation } from 'react-i18next';
import './Search.css';

const Search = ({ id, cla, searchValue, setSearchValue }) => {
 const { t } = useTranslation();
    return (
        <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="search"
            placeholder={t("placeholders.search")}
            className={cla}
            id={id}
        />
    );
}

export default Search;
