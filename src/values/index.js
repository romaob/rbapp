const values = {
    GIFTS_EDITABLE: false,
    fonts: {
        primary: 'Quicksand, Roboto, sans-serif',
        secondary: 'Roboto, sans-serif',
        fancy: '"Pinyon Script", cursive, courier',
    },
    event_date: new Date('2023-05-12 17:00'),
    event_date_later: new Date('2023-05-13 06:00'),
    initial_date: new Date('2016-08-07 00:00'),
    instagramURL: 'https://instagram.com/brunna.nbarbosa',
    facebookURL: 'https://www.facebook.com/brunna.nbarbosa',
    tiktokURL: 'https://www.tiktok.com/@brunnan1',
    locationURL: 'https://goo.gl/maps/3usyB9kFSAXsEUDQA',
}

export function isMarried() {
    return values.event_date_later < new Date();
}

export default values;