import { Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainContainer, SectionWrapper } from '../../../Components';
import { MainCarouselSec } from '../../../Sections';
import CategoryTitlesData from '../../../Data/CategoryTitlesData';
import './HumansPage.css';

const HumansPage = () => {
    const { t } = useTranslation();
    const Data = CategoryTitlesData(t);

    const getLastWordInPath = (path) => {
        const parts = path.split('/');
        return parts[parts.length - 1];
    };
    const currentPath = getLastWordInPath(useLocation().pathname).toLowerCase();

    const currentCategory = Data.find(category =>
        category.category === t(`categoryData.${currentPath}`)
    );

    if (!currentCategory) {
        return <div>No data available for {currentPath}</div>;
    }

    const MainCarouses = currentCategory.items.map((item, index) => {
        return (
            <SectionWrapper key={index} secTitle={item.title} path={item.path}>
                <MainCarouselSec 
                    cla={item.divClass} 
                    items={item.nestedItems}
                />
            </SectionWrapper>
        );
    });

    return (
        <div className='humansPage'>
            <MainContainer>
                <div className="bannerBg" 
                    style={{ '--catImg': `url(${currentCategory.img})` }}
                >
                    {currentCategory.imgTitle}
                </div>
                {MainCarouses}
            </MainContainer>
            <Outlet />
        </div>
    );
};

export default HumansPage;
        
