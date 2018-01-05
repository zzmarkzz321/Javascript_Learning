'use strict';

const FlickerFethcer = {
    photoObjToURL: photoObj => 'https://farm'.concat(photoObj.farm, '.staticflickr.com/',
        photoObj.server, '/', photoObj.id, '_', photoObj.secret, '_b.jpg'),

    transformPhotoObj: photoObj => ({
        title: photoObj.title,
        url: FlickerFethcer.photoObjToURL(photoObj)
    }),

    fetchFlickrData: (apiKey, fetch) => {
        const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
            + apiKey + '&text=pugs&format=json&nojsoncallback=1';
        return fetch(url)
    },

    fetchPhotos: (apiKey, fetch) => {
        return FlickerFethcer.fetchFlickrData(apiKey, fetch)
            .then(data => data.photos.photo.map(FlickerFethcer.transformPhotoObj));
    }
};

module.exports = FlickerFethcer;