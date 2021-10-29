import {Route} from "react-router-dom";
import s from './App.module.scss'
import About from './layout/about/about'
import Header from './layout/header/header';
import WelcomePage from "./layout/welcome_page/welcome_page";
import Carousel from "./layout/about/steps_card/carousel/carousel";
import NoPage from "./layout/common/no_page/no_page";


const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <div className={s.appContent}>
                <Route exact path={'/'} render={() => <About/>}/>
                <Route exact path={'/trainings'} render={() => <NoPage name={'Business trainings'}/>}/>
                <Route exact path={'/open_programs'} render={() => <NoPage name={'Open programs'}/>}/>
                <Route exact path={'/team'} render={() => <NoPage name={'Team'}/>}/>
                <Route exact path={'/consulting'} render={() => <NoPage name={'Consulting'}/>}/>
                <Route exact path={'/webinars'} render={() => <NoPage name={'Webinars'}/>}/>
                <Route exact path={'/useful'} render={() => <NoPage name={'Useful'}/>}/>
                <Route exact path={'/gallery'} render={() => <NoPage name={'Gallery'}/>}/>
                {/*<Footer/>*/}
            </div>
            <Route path={'/welcome'} render={() => <WelcomePage/>}/>
            <Route path={'/slider'} render={() => <Carousel/>}/>
        </div>
    )
};

export default App;