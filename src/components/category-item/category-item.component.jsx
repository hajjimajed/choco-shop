import './category-item.styles.scss'

import { useNavigate } from "react-router-dom";


const CategoryItem = ({ category }) => {

    const { imageUrl, title, route, description } = category;

    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return (
        <div className='category-container'>
            <div className='background-image' style={
                { backgroundImage: `url(${imageUrl})` }
            } />

            <div className='category-body-infos'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>


            <div onClick={onNavigateHandler} className='category-body-btn' >
                <h1>Shop Now</h1>
            </div>


        </div>
    )

}

export default CategoryItem;