import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { infinity } from 'ldrs';

const NowPlaying = () => {
    const [track, setTrack] = useState(null);
    const [albumArtUrl, setAlbumArtUrl] = useState('');
    const [error, setError] = useState('');
    const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY;
    const USERNAME = process.env.REACT_APP_LASTFM_USERNAME;
    infinity.register();

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`);

                console.log(response.data); // Log the response to verify API access
                if (response.data.recenttracks && response.data.recenttracks.track.length > 0) {
                    const currentTrack = response.data.recenttracks.track[0];
                    setTrack(currentTrack);
                    // Fetch album art based on the current track
                    await fetchAlbumArt(currentTrack.album['#text']);
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

        const fetchAlbumArt = async (albumName) => {
            setError(''); // Reset error state
            try {
                const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(albumName)}&entity=album`);
                console.log(albumName);
                const data = await response.json();

                if (data.resultCount > 0) {
                    const albumArt = data.results[0].artworkUrl100.replace('100x100bb', '600x600bb'); 
                    setAlbumArtUrl(albumArt);
                } else {
                    setError('No album found');
                }
            } catch (err) {
                setError('Error fetching album art');
                console.error(err);
            }
        }

        fetchNowPlaying();
    }, [API_KEY, USERNAME]);

    return (
        <div className="now-playing">
            {track ? (
                <div>
                    <div className="cover-container">
                        {albumArtUrl && <img src={albumArtUrl} alt={`${track.album['#text']} cover`} />}
                    </div>
                    <p id='track'>{track.name}</p>
                    <p id='artist'>{track.artist['#text']}</p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            ) : (
                <p>
                    <l-infinity
                        size="55"
                        stroke="4"
                        stroke-length="0.15"
                        bg-opacity="0.1"
                        speed="1.3"
                        color="var(--background-lighter)" 
                    ></l-infinity>
                </p>
            )}
        </div>
    );
};

export default NowPlaying;
