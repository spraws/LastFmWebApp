import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ColorThief from 'colorthief';


const NowPlaying = () => {
    const [track, setTrack] = useState(null);
    const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY;
    const USERNAME = process.env.REACT_APP_LASTFM_USERNAME;

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`);
                console.log(response.data); // Log the response to verify API access
                if (response.data.recenttracks && response.data.recenttracks.track.length > 0) {
                    setTrack(response.data.recenttracks.track[0]);
                }
            } catch (error) {
                console.error("Error fetching data from Last.fm API:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                }
            }
        };

        fetchNowPlaying();
    }, [API_KEY, USERNAME]);

    return (
        <div className="now-playing">
            {track ? (
                <div>
                    <div className="cover-container">
                    {track.image && track.image.length > 0 && (
                    <img src={track.image[3]['#text']} alt={`${track.album['#text']} cover`} />
                    )}
                    </div>
                    <p id='track'>{track.name}</p>
                    <p id='artist'>{track.artist['#text']}</p>
                    {/* <p id='album'>{track.album['#text']}</p> */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default NowPlaying;