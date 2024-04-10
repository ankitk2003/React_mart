import { useState } from 'react';
import style from './body.module.css';
import { phoneData, laptopData, cameraData } from '../../2-components/electronics.jsx';

export default function Body() {
    const allElectronicsData = [...phoneData, ...laptopData, ...cameraData];
    const allElectronicsName = allElectronicsData.map(item => item.name); // yaha phle hi name alag kar liya hai.
    const [searchVal, setSearchVal] = useState("");
    const handleInputChange = (event) => {
        setSearchVal(event.target.value);
    };

    const filteredData = allElectronicsName.filter(item =>
        item.toLowerCase().includes(searchVal.toLowerCase())
    );

    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.childDiv}>
                    <h1>One-stop shop – find it all here!</h1>
                    <input
                        type="text"
                        placeholder="Search product"
                        onChange={handleInputChange}
                    />
                                        <button type="submit">Search</button>

                    {searchVal && (  // checking the searchVal is not empty. agar ye nahi daalege to 
                                      // pura list render hote rahega. aur aise jo bhi keyword hoga usko filter kar k render krega
                        <ul>
                            {filteredData.map((item, index) => (
                                <li key={index} className={style.searchList}>{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}
