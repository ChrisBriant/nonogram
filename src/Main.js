import { useEffect, useContext } from "react";
import {Context as NonogramContext} from './context/NonogramContext';
import MainDisplay from "./components/MainDisplay";
import BottomPanel from "./components/BottomPanel";
import SidePanel from "./components/SidePanel";
import AreYouSure from "./components/AreYouSure";



const Main = () => {
    const {setNonogram,state:{nonogramData} } = useContext(NonogramContext);

    useEffect(() => {
        setNonogram()
    },[]);

    return(
        <div className="mainLayout">
            <AreYouSure message="Are you sure?"/>
            <MainDisplay />
            <SidePanel />
            <BottomPanel />
        </div>
    );
}

export default Main;