import NoodleTile from "./NoodleTile";

import './noodleList.scss';

const NoodleList = ({ noodles, images }) => {
    return (
        <div className="noodle-list">
            {noodles.map(noodle => (<NoodleTile data={noodle} key={noodle.key} image={images[noodle.key % images.length]}/>))}
        </div>
    );
};

export default NoodleList;