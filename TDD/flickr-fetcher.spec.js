'use strict';

const { expect } = require('chai');
const FlickrFetcher = require('./flickr-fetcher');

const apiKey = 'randomstring';

const mockFlickrPhotoObj = {
    id:       '24770505034',
    owner:    '97248275@N03',
    secret:   '31a9986429',
    server:   '1577',
    farm:     2,
    title:    '20160229090898',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0
};

const mockFlickrPhotoObj2 = {
    id:       '25373736106',
    owner:    '99117316@N03',
    secret:   '146731fcb7',
    server:   '1669',
    farm:     2,
    title:    'Dog goes to desperate measure to avoid walking on a leash',
    ispublic: 1,
    isfriend: 0,
    isfamily: 0
};

const mockResponseData = {
    'photos': {
        'page':    1,
        'pages':   2872,
        'perpage': 100,
        'total':   '287170',
        'photo':   [{
            id:       '25373736106',
            owner:    '99117316@N03',
            secret:   '146731fcb7',
            server:   '1669',
            farm:     2,
            title:    'Dog goes to desperate measure to avoid walking on a leash',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        }, {
            id:       '24765033584',
            owner:    '27294864@N02',
            secret:   '3c190c104e',
            server:   '1514',
            farm:     2,
            title:    'the other cate',
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
        }]
    }
};

const fetcherStub = url => {
    const expectedURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
        + apiKey + '&text=pugs&format=json&nojsoncallback=1';
    expect(url).to.equal(expectedURL);
    return Promise.resolve(mockResponseData);
};

describe('FlickrFetcher', () => {
    it('should take a photo object from Flickr and return a string', () => {
        let expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg';
        let actual = FlickrFetcher.photoObjToURL(mockFlickrPhotoObj);
        expect(actual).to.eql(expected);
    })
});

describe('#objectTransformation', () => {
   it('should take a photo object and return a new object with title and url', () => {
        const expected = {
            title: 'Dog goes to desperate measure to avoid walking on a leash',
            url:   'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
        };
        const actual = FlickrFetcher.transformPhotoObj(mockFlickrPhotoObj2);
        expect(actual).to.be.eql(expected);
   })
});

describe('#fetchFlickrData', () => {
    it('should take an API key and fetcher function object and return a promise for JSON data', () => {
        FlickrFetcher.fetchFlickrData(apiKey, fetcherStub)
            .then(function(actual) {
                expect(actual).to.eql(mockResponseData);
            });
    });
});

describe('#fetchPhotos', () => {
    it('should take an API key and fetcher function, then return a promise for transformed photo obj', () => {
        const expected = [{
            title: 'Dog goes to desperate measure to avoid walking on a leash',
            url:   'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
        }, {
            title: 'the other cate',
            url:   'https://farm2.staticflickr.com/1514/24765033584_3c190c104e_b.jpg'
        }];

        return FlickrFetcher.fetchPhotos(apiKey, fetcherStub)
            .then(actual => {
                expect(actual).to.eql(expected);
            });
    })
})