export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Hyde Park, Cincinnati',
    rating: 5,
    text: 'Pat showed up same day and fixed our leaking pipe under the kitchen sink in under an hour. Fair price, no surprises. Will definitely call again.',
  },
  {
    name: 'Dave R.',
    location: 'Blue Ash, OH',
    rating: 5,
    text: 'Had a water heater go out on a Friday evening. Pat was out the next morning and had us back up and running before noon. Highly recommend.',
  },
  {
    name: 'Jennifer T.',
    location: 'Anderson Township, OH',
    rating: 5,
    text: 'Honest, on time, and professional. Pat explained everything clearly before doing any work. Great experience from start to finish.',
  },
  {
    name: 'Mike B.',
    location: 'Loveland, OH',
    rating: 5,
    text: 'Called about a clogged drain that two other plumbers couldn\'t fix. Pat came out and solved it the same day. Very knowledgeable.',
  },
  {
    name: 'Karen W.',
    location: 'Montgomery, OH',
    rating: 5,
    text: 'Pat replaced all the old galvanized pipes in our 1950s home. The work was thorough, clean, and done ahead of schedule. Couldn\'t be happier.',
  },
]
