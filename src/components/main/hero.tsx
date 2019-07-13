import * as React from 'react';

import '../../styles/modules/_hero.scss';

export class Hero extends React.Component {

    render(){

        return (
            <div className="row">
                <div className="col-12 hero-banner">
                    <div className="cont-img">
                        <img src="https://dummyimage.com/1920x1280/00ff95" alt="ImgPlaceholder"/>
                    </div>
                </div>
            </div>
        );
    }
}