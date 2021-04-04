import { useParams } from 'react-router-dom'
import {columnKeys} from "./constants";

import './noodleDetails.scss';

const NoodleDetails = ({noodle, image}) => {
    const { id } = useParams();
    return (
        <div className="noodle-details">
            <div className="title">{noodle?.[columnKeys.variety]}</div>
            <img src={image?.['Image']} alt="" />
            <div>Brand: {noodle?.[columnKeys.brand]}</div>
            <div>Country: {noodle?.[columnKeys.country]}</div>
            <div>Stars: {noodle?.[columnKeys.stars]}</div>
            <div>Top ten: {noodle?.[columnKeys.topTen]}</div>
        </div>
    );
};

export default NoodleDetails;