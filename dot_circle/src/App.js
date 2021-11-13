import {Route} from "react-router-dom";
import s from './App.module.scss'
import About from './layout/about/about'
import Header from './layout/menu/menu';
import WelcomePage from "./layout/welcome_page/welcome_page";
import NoPage from "./layout/common/no_page/no_page";
import Useful from "./layout/useful/useful";
import Webinars from "./layout/webinars/webinars";
import DreamTeam from "./layout/dream_team/dream_team";
import Consulting from "./layout/consalting/consulting";

import PhotoGallery from "./layout/gallery/gallery";


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.appContent}>
                <Route exact path={'/'} render={() => <About/>}/>
                <Route exact path={'/trainings'} render={() => <NoPage name={'Business trainings'}/>}/>
                <Route exact path={'/open_programs'} render={() => <NoPage name={'Open programs'}/>}/>
                <Route exact path={'/team'} render={() => <DreamTeam name={'Team'}/>}/>
                <Route exact path={'/consulting'} render={() => <Consulting name={'Consulting'}/>}/>
                <Route exact path={'/webinars'} render={() => <Webinars name={'Webinars'}/>}/>
                <Route exact path={'/useful'} render={() => <Useful name={'Useful'}/>}/>
                <Route exact path={'/gallery'} render={() => <PhotoGallery name={'Gallery'}/>}/>
            </div>
            <Route path={'/welcome'} render={() => <WelcomePage/>}/>
        </div>
    )
};

export default App;