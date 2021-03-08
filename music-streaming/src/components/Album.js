import React from 'react'
// import rockstar from '../src/images/rockstar-forProject.png'


function Album(props) {
    
        return (
            <div>
                {/* <p>A.R.Rahman</p>
                <p>Rockstar</p>
                <img src="music-streaming/images/rockstar-forProject.png" alt="Rockstar Album cover"></img> */}



                <p>{props.artist}</p>
                <p>{props.album}</p>
                {props.img}
            </div>
        )
    
}

export default Album
