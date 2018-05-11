const flickrConfig = {
    apiKey: '12aaca691f3effb2e4ec52478e110197',
    method: 'flickr.photos.getRecent',
}

export const AppConfig = {
    appTitle: 'CXA Group - Case Assignment Application',
    // tslint:disable-next-line
    flickrApiBase: `https://api.flickr.com/services/rest/?method=${flickrConfig.method}&api_key=${flickrConfig.apiKey}&format=json&nojsoncallback=1`,
    toastrConfig: {
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
    }
}
