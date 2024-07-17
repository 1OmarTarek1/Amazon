import { useTranslation } from 'react-i18next';
import { HomeHeaderSec, MainCarouselSec } from '../../Sections';
import CategoryTitlesData  from '../../Data/CategoryTitlesData'
import { MainContainer, SectionWrapper } from '../../Components';
import './HomePage.css'




const HomePage = () => {
  const { t } = useTranslation();
  const Data = CategoryTitlesData(t);
  const MainCarouses = Data.map(( item, index ) => {
    return (

          <SectionWrapper key={index} secTitle={item.category} path={item.catPath}>
            <MainCarouselSec 
            cla={item.divClass} 
            items={item.items}
            />
          </SectionWrapper>
    )
})
  return (
    <div className='homePage'>
      <HomeHeaderSec />
      <MainContainer>
        {MainCarouses}
      </MainContainer>
    </div>
  )
}

export default HomePage