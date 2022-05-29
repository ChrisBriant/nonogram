import { useEffect, useContext } from "react";
import {Context as NonogramContext} from './context/NonogramContext';
import MainDisplay from "./components/MainDisplay";
import BottomPanel from "./components/BottomPanel";
import SidePanel from "./components/SidePanel";
import AreYouSure from "./components/AreYouSure";
import LoadingSpinner from './components/LoadingSpinner';
import RulesDialog from "./components/RulesDialog";



const Main = () => {
    const {setNonogram,state:{nonogramData,loading} } = useContext(NonogramContext);

    useEffect(() => {
        setNonogram()
    },[]);

    return(
        <div className="mainLayout">
            {
                loading ? <LoadingSpinner /> : null
            }
            <RulesDialog />
            <AreYouSure />
            <MainDisplay />
            <SidePanel />
            <BottomPanel />
        </div>
    );
}

export default Main;