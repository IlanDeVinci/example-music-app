import HomeController from './HomeController'
import TrackController from './TrackController'
import Settings from './Settings'
const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
TrackController: Object.assign(TrackController, TrackController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers