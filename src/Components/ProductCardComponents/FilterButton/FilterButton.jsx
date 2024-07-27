import './FilterButton.css'; 

const FilterButton = ({ brand, selectedFilter, onClick, children }) => {
    const isActive = selectedFilter === brand || (selectedFilter === null && brand === null);

    return (
        <button
            className={`filterBtn ${isActive ? 'active' : ''}`}
            onClick={() => onClick(brand)}
        >
            {children}
        </button>
    );
};

export default FilterButton;

