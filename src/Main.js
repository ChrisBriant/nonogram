import { useEffect, useContext } from "react";
//import { getNonogram } from "./network/api";
import {Context as NonogramContext} from './context/NonogramContext';
import MainDisplay from "./components/MainDisplay";
import BottomPanel from "./components/BottomPanel";
import SidePanel from "./components/SidePanel";



const Main = () => {
    const {setNonogram,state:{nonogramData} } = useContext(NonogramContext);

    useEffect(() => {
        //const nonogramData = 
        setNonogram()
        // .then((nonogramData) => {
        //     console.log('Nonogram data',nonogramData);
        //     setNonogram(nonogramData);
        // });

    },[]);

    return(
        <div className="mainLayout">
            <MainDisplay />
            <SidePanel />
            <BottomPanel />
        </div>
    );
}

export default Main;