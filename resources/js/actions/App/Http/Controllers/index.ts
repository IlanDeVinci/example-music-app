import Api from './Api'
import HomeController from './HomeController'
import TrackController from './TrackController'
import PlaylistController from './PlaylistController'
import ApiKeyController from './ApiKeyController'
import Settings from './Settings'
const Controllers = {
    Api: Object.assign(Api, Api),
HomeController: Object.assign(HomeController, HomeController),
TrackController: Object.assign(TrackController, TrackController),
PlaylistController: Object.assign(PlaylistController, PlaylistController),
ApiKeyController: Object.assign(ApiKeyController, ApiKeyController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers