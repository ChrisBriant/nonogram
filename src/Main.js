import { useEffect, useContext } from "react";
import {Context as NonogramContext} from './context/NonogramContext';
import MainDisplay from "./components/MainDisplay";
import BottomPanel from "./components/BottomPanel";
import SidePanel from "./components/SidePanel";
import AreYouSure from "./components/AreYouSure";
import LoadingSpinner from './components/LoadingSpinner';



const Main = () => {
    const {setNonogram,state:{nonogramData,loading} } = useContext(NonogramContext);

    useEffect(() => {
        setNonogram()
    },[]);

    console.log('AM I LOADING', loading);

    return(
        <div className="mainLayout">
            {
                loading ? <LoadingSpinner /> : null
            }
            <AreYouSure />
            <MainDisplay />
            <SidePanel />
            <BottomPanel />
        </div>
    );
}

export default Main;