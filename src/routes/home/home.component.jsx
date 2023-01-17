
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";


const Home = () => {


    const categories = [
        {
            id: 1,
            title: "Bite Size",
            imageUrl: "https://cdn.shopify.com/s/files/1/0357/7944/4871/files/Pouch-Banner-1_1e6686c4-1c7d-4900-a2c0-44d1455a9e86_1350x759.jpg?v=1613704832",
            route: '/candys/bite%20size',
            description: 'Here you can find the greatest collection of our most loved chocolate bars!'
        },
        {
            id: 2,
            title: "Chocolate Bars",
            imageUrl: "https://cdn.shopify.com/s/files/1/0357/7944/4871/files/Choc_1350x1013.jpg?v=1630603105",
            route: '/chocolates/chocolate%20bars',
            description: 'Here you can find the greatest collection of our most loved chocolate bars!'
        },
        {
            id: 3,
            title: "Chocolate Tablets",
            imageUrl: "https://cdn.shopify.com/s/files/1/0357/7944/4871/files/USA-SWEETS_1350x1350.jpg?v=1614092045",
            route: '/chocolates/chocolate%20tablets',
            description: 'Here you can find the greatest collection of our most loved chocolate bars!'
        },
        {
            id: 4,
            title: "Bubble Gum",
            imageUrl: "https://cdn.shopify.com/s/files/1/0357/7944/4871/files/Jar-and-Bucket-Banner_893x502.jpg?v=1636021797",
            route: '/candys/bubble%20gum',
            description: 'Here you can find the greatest collection of our most loved chocolate bars!'
        },
        {
            id: 5,
            title: "Discover Our Gifts",
            imageUrl: "https://cdn.shopify.com/s/files/1/0357/7944/4871/files/The-UK_s-No1-Online-Sweet-Store-CTA-Background-Image_1000x518_crop_center.jpg?v=1613552254",
            route: '/gifts',
            description: 'Here you can find the greatest collection of our most loved chocolate bars!'
        }
    ]


    return (
        <div>

            <Outlet />

            <Directory categories={categories} />


        </div>
    )

}

export default Home;