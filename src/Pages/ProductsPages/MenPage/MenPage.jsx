import { useTranslation } from 'react-i18next'
import { MainContainer, SectionWrapper } from '../../../Components'
import { MainCarouselSec } from '../../../Sections'
import CategoryTitlesData from '../../../Data/CategoryTitlesData'
import './MenPage.css'
import '../ProductsPages.css'

const MenPage = () => {
    // Find the 'Men' category
    const { t } = useTranslation()
    const Data = CategoryTitlesData(t)

    const menCategory = Data.find(category => category.category === t("categoryData.men"));

    if (!menCategory) {
        return <div>No data available for Men</div>;
    }

    // Map through the items within the 'Men' category
    const MainCarouses = menCategory.items.map((item, index) => {
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
        <div className='MenPage'>
            <MainContainer>
                {MainCarouses}
            </MainContainer>
        </div>
    )
}

export default MenPage
