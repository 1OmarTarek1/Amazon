import { useTranslation } from 'react-i18next'
import { MainContainer, SectionWrapper } from '../../../Components'
import { MainCarouselSec } from '../../../Sections'
import CategoryTitlesData from '../../../Data/CategoryTitlesData'
import './WomenPage.css'
import '../ProductsPages.css'





const WomenPage = () => {
    const { t } = useTranslation()
    const Data = CategoryTitlesData(t)
    const womenCategory = Data.find(category => category.category === t("categoryData.women"));

    if (!womenCategory) {
        return <div>No data available for Women</div>;
    }

    const MainCarouses = womenCategory.items.map((item, index) => {
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
        <div className='WomenPage'>
            <MainContainer>
                {MainCarouses}
            </MainContainer>
        </div>
    )
}

export default WomenPage