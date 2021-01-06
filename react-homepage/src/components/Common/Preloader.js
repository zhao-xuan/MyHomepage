import React from 'react';
import $ from 'jquery';

class Preloader extends React.Component {
    componentDidMount () {
        $(window).on('load', function() { 
            $(".loader").fadeOut(); 
            $("#preloder").delay(400).fadeOut("slow");
        });
    }

    render() {
        return (
            <div id="preloder">
                <div className="loader"></div>
            </div>
        );
    }
}

export default Preloader;