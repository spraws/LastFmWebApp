import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { infinity } from 'ldrs';
import { red } from '@mui/material/colors';
export const time = new Date().toLocaleTimeString();




const NowPlaying = () => {
    const [track, setTrack] = useState(null);
    const [albumArtUrl, setAlbumArtUrl] = useState('');
    const [error, setError] = useState('');
    const [songName, setSongName] = useState('');
    const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY;
    const USERNAME = process.env.REACT_APP_LASTFM_USERNAME;
    infinity.register();

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const time = new Date();
                console.log('Fetching now playing track...' + time);
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`);

                // console.log(response.data); // Log the response to verify API access
                if (response.data.recenttracks && response.data.recenttracks.track.length > 0) {
                    const currentTrack = response.data.recenttracks.track[0];
                    setTrack(currentTrack);
                    // Fetch album art based on the current track
                    await fetchAlbumArt(currentTrack.album['#text'], currentTrack.artist['#text'], currentTrack.name);
                    await fetchArtist(currentTrack.artist['#text']);
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
        setInterval(fetchNowPlaying, 60000);



        

        const fetchArtist = async (artistName) => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
                // console.log(response.data); // Log the response to verify API access
            } catch (error) {
                console.error("Error fetching artist data from Last.fm API:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                }
            }

        };



        const fetchAlbumArt = async (albumName, artistName, track) => {
            setError(''); // Reset error state
            try {
                //Encode the album name and artist name to be used in the URL
                track = encodeURIComponent(albumName);
                artistName = encodeURIComponent(artistName);
                albumName = encodeURIComponent(track);
                //note
                //encode again? If the song doesnt use unicode characters, thr proxy will return a 404, for some reason this is the only way to fix it?
                const response = await fetch(`https://corsproxy.io/?https://api.deezer.com/search?q=${encodeURIComponent(artistName)}+${encodeURIComponent(track)}+${encodeURIComponent(albumName)}`);
                //https://api.spotify.com/v1/search?q=album:${encodeURIComponent(artistName)}+artist:${encodeURIComponent(albumName)}&type=album
                const data = await response.json();
                console.log(response);
                console.log(encodeURIComponent(track));

                if(data.data && data.data.length) {
                    const album = data.data[0];
                    setAlbumArtUrl(album.album.cover_xl);
                }
                //if no xl image is found, try to use the large image and so on
                

            } catch (error) {
                console.error("Error fetching album art data from Deezer API:", error);
                setError('Error fetching album art data from Deezer API');
            }
                
        };
        

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