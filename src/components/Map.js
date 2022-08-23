import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps"
export default class Maps extends Component {
    render() {
        return (
            <div className="container">
                <GoogleMaps
                    apiKey={"AIzaSyDAqinXwCCK044Ajlj0dZ1OxghrkZboCls"}
                    style={{ height: "500px" , width: "800px"}}
                    zoom={18}
                    center={{
                        lat: 17.5347404,
                        lng: -99.4849223,
                    }}
                    markers={{ lat: 17.5347404, lng: -99.4849223 }}
                    />
            </div>
        );
    }
}
