import { createContext, useState, useEffect } from "react";


import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";




export const GiftContext = createContext({
    giftsMap: {}
})


export const GiftProvider = ({ children }) => {

    const [giftsMap, setGiftsMap] = useState({})

    useEffect(() => {

        const getGiftsMap = async () => {
            const giftMap = await getCategoriesAndDocuments('gifts')

            console.log(giftMap);

            setGiftsMap(giftMap)
        }

        getGiftsMap();

    }, [])



    const value = { giftsMap }


    return (
        <GiftContext.Provider value={value} >
            {children}
        </GiftContext.Provider>
    )

}