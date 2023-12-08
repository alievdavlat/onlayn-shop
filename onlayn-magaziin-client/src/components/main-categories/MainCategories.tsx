import { mainCategoryItem } from "../../constants"
import MainCategoriesCard from "./MainCategoriesCard"


interface MainCategoryItem {
  id:number,
  title:string
}

const MainCategories = () => {
  return (
    <section className="container">
    <div className="flex items-center gap-10 relative  w-fit left-[50%] transform translate-x-[-50%] translate-y-[-50%]  z-50 ">
        {
          mainCategoryItem.map((item:MainCategoryItem, index:number) => (
            <MainCategoriesCard  {...item} index={index} key={item.id}/>
          ))
        }
    </div>
    </section>
  )
}

export default MainCategories