'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { infinity } from 'ldrs';

interface Track {
    name: string;
    artist: { '#text': string };
    album: { '#text': string };
}

const NowPlaying: React.FC = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const [albumArtUrl, setAlbumArtUrl] = useState<string>('');
    const [error, setError] = useState<string>('');
    const API_KEY = process.env.NEXT_PUBLIC_LAST_FM_API_KEY;
    const USERNAME = process.env.NEXT_PUBLIC_LASTFM_USERNAME;
    infinity.register();

    useEffect(() => {
        const fetchNowPlaying = async () => {
            try {
                const time = new Date();
                console.log('Fetching now playing track...' + time);
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`);
        
                console.log(response.data); // Log the response to verify API access
                if (response.data.recenttracks && response.data.recenttracks.track.length > 0) {
                    const currentTrack = response.data.recenttracks.track[0];
                    setTrack(currentTrack);
        
                    // Fetch album art based on the current track
                    await fetchAlbumArt(currentTrack.album['#text'], currentTrack.artist['#text'], currentTrack.name); // Use currentTrack.name here
                    await fetchArtist(currentTrack.artist['#text']);
                }
            } catch (error: any) {
                console.error("Error fetching data from Last.fm API:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                }
            }
        };
        
        const intervalId = setInterval(fetchNowPlaying, 60000);

        const fetchArtist = async (artistName: string) => {
            try {
                const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${API_KEY}&format=json`);
                console.log(response.data); // Log the response to verify API access
            } catch (error: any) {
                console.error("Error fetching artist data from Last.fm API:", error);
                if (error.response) {
                    console.error("Response data:", error.response.data);
                    console.error("Response status:", error.response.status);
                    console.error("Response headers:", error.response.headers);
                }
            }
            console.log(artistName);
        };

        const fetchAlbumArt = async (albumName: string, artistName: string, track: string) => {
            setError(''); // Reset error state
            try {
                const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(albumName)}+${encodeURIComponent(artistName)}+${encodeURIComponent(track)}&entity=musicTrack`);
                const data = await response.json();
                console.log(response);
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

        return () => clearInterval(intervalId);
    }, [API_KEY, USERNAME]);

    return (
        <main className="flex items-center justify-center min-h-screen "> {/* Centering the content */}

            <div className=" "> 
                {track ? (
                    <div>
                        <div className="mb-4">
                            {albumArtUrl && <img src={albumArtUrl} alt={`${track.album['#text']} cover`} className="w-full h-auto rounded" />}
                        </div>
                        <p className="text-xl font-bold text-center">{track.name}</p>
                        <p className="text-center">{track.artist['#text']}</p>
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
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
        </main>
    );
};

export default NowPlaying;