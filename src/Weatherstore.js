
import { action, extendObservable } from 'mobx';

class WeatherStore {
    constructor() {
        extendObservable(this,{
            city:"",
            lat:"",
            lon:"",
            update:action((obj) => {
                var lat_lon = obj["loc"].split(",");
                this.city = obj["city"]
                this.lat =  lat_lon[0]
                this.lon = lat_lon[1]
            })

        })
    }
}

export default new WeatherStore;