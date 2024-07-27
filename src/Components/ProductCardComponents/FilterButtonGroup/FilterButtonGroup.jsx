import { FilterButton } from '../..'; 

const FilterButtonGroup = ({ uniqueBrands, selectedFilter, onFilterClick }) => {
    return (
        <div className="filterBtns">
            <div className="cont">
            <FilterButton
                    brand={null}
                    selectedFilter={selectedFilter}
                    onClick={onFilterClick}
                >
                    All
                </FilterButton>
                {uniqueBrands.map(brand => (
                    <FilterButton
                        key={brand}
                        brand={brand}
                        selectedFilter={selectedFilter}
                        onClick={onFilterClick}
                    >
                        {brand}
                    </FilterButton>
                ))}
            </div>
        </div>
    );
};

export default FilterButtonGroup;
