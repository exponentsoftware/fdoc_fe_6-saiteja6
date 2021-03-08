import React from 'react'

function Albums(props) {
    //console.log(props);
    return (
        <div>

            {/* mapping over the array data received as props from the App component's state */}
            {props.albums.map(album => {
                return (<ul><li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.songs}</li>


                    </ul>)
            })}
        </div>
    )
}

export default Albums
