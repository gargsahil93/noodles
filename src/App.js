import './App.css';
import {useEffect, useState} from "react";
import NoodleList from "./components/NoodlesList";
import {BrowserRouter, Route} from "react-router-dom";
import NoodleDetails from "./components/NoodleDetails";

const NOODLES_API = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/TopRamen8d30951.json';
const IMAGES_API = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/noodlesec253ad.json';

function App() {
    const [noodles, setNoodles] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(NOODLES_API).then(data => data.json()).then(data => setNoodles(data.map((item, index) => {
            item.key = index;
            return item;
        })));
        fetch(IMAGES_API).then(data => data.json()).then(data => setImages(data));
    }, []);


    if(noodles.length === 0 && images.length === 0) {
        return <div></div>;
    }
    return (
        <div className="app">
            <BrowserRouter>
                <Route exact path="/">
                    <NoodleList noodles={noodles} images={images}/>
                </Route>
                <Route path="/:id" render={(props) => {
                    const { id } = props.match.params;
                    return <NoodleDetails noodle={noodles[id]} image={images[id % images.length]} />
                }} />
            </BrowserRouter>

        </div>
    );
}

export default App;
