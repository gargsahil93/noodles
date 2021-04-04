import NoodleTile from "./NoodleTile";
import {useState, useEffect} from "react";

import './noodleList.scss';
import {columnKeys} from "./constants";

const NoodleList = ({ noodles, images }) => {
    const [brand, setBrand] = useState('');
    const [starSort, setStarSort] = useState("0");
    const [sortedNoodles, setSortedNoodles] = useState(Array.from(noodles));

    useEffect(() => {
        setSortedNoodles(() => {
            if(starSort === "0") {
                console.log('same');
                return Array.from(noodles);
            }
            return Array.from(noodles).sort((a, b) => {
                const aStar = a[columnKeys.stars] === "NaN" ? 0 : a[columnKeys.stars];
                const bStar = b[columnKeys.stars] === "NaN" ? 0 : b[columnKeys.stars];
                if(starSort === "1")
                    return aStar - bStar;
                else
                    return bStar - aStar;
            });
        });
    }, [starSort, noodles]);
    const getNoodles = () => {
        return sortedNoodles.filter(
            noodle => noodle[columnKeys.brand].toLowerCase().includes(brand.toLowerCase())
        ).map(noodle => (<NoodleTile data={noodle} key={noodle.key} image={images[noodle.key % images.length]}/>));
    }
    return (
        <div className="list-wrapper">
            <div className="header">
                <div>Brand: <input id="brand" onChange={(e) => setBrand(e.target.value)}/></div>
                <div>Stars: <select id="stars" onChange={(e) => {setStarSort(e.target.value)}}>
                    <option value={0}>No Sort</option>
                    <option value={1}>Increasing</option>
                    <option value={2}>Decreasing</option>
                </select></div>
            </div>
            <div className="noodle-list">
                {getNoodles()}
            </div>
        </div>
    );
};

export default NoodleList;