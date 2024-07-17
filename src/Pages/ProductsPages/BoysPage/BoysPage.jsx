import { useTranslation } from 'react-i18next'
import { MainContainer, SectionWrapper } from '../../../Components'
import { MainCarouselSec } from '../../../Sections'
import CategoryTitlesData from '../../../Data/CategoryTitlesData'
import './BoysPage.css'
import '../ProductsPages.css'





const BoysPage = () => {
    const { t } = useTranslation()
    const Data = CategoryTitlesData(t)
    const boysCategory = Data.find(category => category.category === t("categoryData.boys"));

    if (!boysCategory) {
        return <div>No data available for Boys</div>;
    }

    const MainCarouses = boysCategory.items.map((item, index) => {
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
        <div className='BoysPage'>
            <MainContainer>
                {MainCarouses}
            </MainContainer>
        </div>
    )
}

export default BoysPage