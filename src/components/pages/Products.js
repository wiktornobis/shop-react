import React, {useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../../api/apiConfig";

export default function ListClothes() {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        getClothes()
    }, [])

    useEffect(() => {
        console.log(clothes)

    }, [clothes])

    function getClothes() {
        const clothesCollectionRef = collection(db, 'clothes')
        getDocs(clothesCollectionRef)
            .then(response => {
                const list = response.docs.map(doc => ({
                    data: doc.data(),
                    id: doc.id,
                    price: doc.data().price,
                    image: doc.data().image,

                }))
                setClothes(list)

            }).catch(error => console.log(error.message))

    }

    return (
        <div>
            <h4>List Products</h4>
            <div>
                {clothes.map(list => (
                    <div key={list.id}>
                        <h4>{list.image}</h4>
                        <h2 >{list.data.name}</h2>
                        <h3>{list.price}</h3>

                    </div>

                ))}

            </div>

        </div>
    );
}

