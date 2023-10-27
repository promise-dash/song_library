/**

Model for a Song object
@typedef {Object} Song
@property {string} id The unique identifier of the song
@property {string} songName The name of the song
@property {string} artistName The name of the artist who performed the song
@property {number} numberOfStreams The number of times the song has been streamed
@property {number} releaseYear The year the song was released
@property {number} durationInSeconds The duration of the song in seconds */

export class Song {
    "id": string
    "songName": string
    "artistName": string
    "numberOfStreams": number
    "releaseYear": number
    "durationInSeconds": number
}