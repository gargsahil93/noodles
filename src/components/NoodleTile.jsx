import './noodleTile.scss';

const columnKeys = {
    brand: 'Brand',
    variety: 'Variety',
    style: 'Style',
    country: 'Country',
    stars: 'Stars',
    topTen: 'Top Ten',
};

const NoodleTile = ({ data, image }) => {
    return (
        <div className="noodle-tile">
            <img src={image?.['Image'] || ''} alt="" className="noodle-tile-img"/>
            <div className="noodle-tile-header">{data[columnKeys.variety]}</div>
            <div className="noodle-tile-content">
                <div>Brand: {data[columnKeys.brand]}</div>
                <div>Style: {data[columnKeys.style]}</div>
                <div>Country: {data[columnKeys.country]}</div>
                <div>Stars: {data[columnKeys.stars]}</div>
                <div>Top Ten: {data[columnKeys.topTen]}</div>
            </div>
        </div>
    );
};

export default NoodleTile;
