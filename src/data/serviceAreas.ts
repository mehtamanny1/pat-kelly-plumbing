export interface AreaZone {
  zone: string
  cities: string[]
}

export const serviceAreas: AreaZone[] = [
  {
    zone: 'Cincinnati Proper & Neighborhoods',
    cities: ['Hyde Park', 'Mount Lookout', 'Anderson Township', 'Westwood', 'Price Hill', 'Oakley', 'Norwood'],
  },
  {
    zone: 'Inner Suburbs',
    cities: ['Blue Ash', 'Sharonville', 'Kenwood', 'Loveland', 'Madeira', 'Milford', 'Montgomery', 'Reading', 'Springdale', 'Forest Park'],
  },
  {
    zone: 'West Side',
    cities: ['Delhi Township', 'Dent', 'Green Township', 'Harrison', 'Cheviot', 'North Bend'],
  },
  {
    zone: 'East Side',
    cities: ['Batavia', 'Amelia', 'Clermont County'],
  },
]
