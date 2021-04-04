import NoodleTile from "./NoodleTile";
import {useState, useEffect} from "react";

import './noodleList.scss';
import {columnKeys} from "./constants";

const NoodleList = ({ noodles, images }) => {
    const [brand, setBrand] = useState('');
    const [starSort, setStarSort] = useState('');
    const [sortedNoodles, setSortedNoodles] = useState(Array.from(noodles));

    useEffect(() => {
        if(!starSort) return;
        setSortedNoodles(() => noodles.sort((a, b) => {
            const aStar = a[columnKeys.stars] === "NaN" ? 0 : a[columnKeys.stars];
            const bStar = b[columnKeys.stars] === "NaN" ? 0 : b[columnKeys.stars];
            if(starSort === 'increasing')
                return aStar - bStar;
            else
                return bStar - aStar;
        }));
    }, [starSort, noodles])
    return (
        <div className="list-wrapper">
            <div className="header">
                <div>Brand: <input id="brand" onChange={(e) => setBrand(e.target.value)}/></div>
                <div>Stars: <select id="stars" onChange={(e) => {setStarSort(e.target.value)}}>
                    <option value="increasing">Increasing</option>
                    <option value="decreasing">Decreasing</option>
                </select></div>
            </div>
            <div className="noodle-list">
                {sortedNoodles.filter(
                    noodle => noodle[columnKeys.brand].toLowerCase().includes(brand.toLowerCase())
                )
                .map(noodle => (<NoodleTile data={noodle} key={noodle.key} image={images[noodle.key % images.length]}/>))}
            </div>
        </div>
    );
};

export default NoodleList;