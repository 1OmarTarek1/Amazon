import { useTranslation } from 'react-i18next'
import { MainContainer, SectionWrapper } from '../../../Components'
import { MainCarouselSec } from '../../../Sections'
import CategoryTitlesData from '../../../Data/CategoryTitlesData'
import './GirlsPage.css'
import '../ProductsPages.css'





const GirlsPage = () => {
    const { t } = useTranslation()
    const Data = CategoryTitlesData(t)
    const girlsCategory = Data.find(category => category.category === t("categoryData.girls"));

    if (!girlsCategory) {
        return <div>No data available for Girls</div>;
    }

    const MainCarouses = girlsCategory.items.map((item, index) => {
        return (
            <SectionWrapper key={index} secTitle={item.title} path={item.path}>
                <MainCarouselSec 
                    cla={item.divClass} 
                    items={item.nestedItems}
                />
            </SectionWrapper>
        )
    });

    return (
        <div className='GirlsPage'>
            <MainContainer>
                {MainCarouses}
            </MainContainer>
        </div>
    )
}

export default GirlsPage