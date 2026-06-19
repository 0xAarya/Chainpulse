export const contractFeatures = [
  {
    title: 'Community records',
    detail: 'Stores name, members, region, growth percentage, and focus area.',
  },
  {
    title: 'Event records',
    detail: 'Tracks event name, location, attendees, status, and follow-up note.',
  },
  {
    title: 'Owner updates',
    detail: 'Only the contract owner can add or update dashboard data.',
  },
]

export const contractMethods = [
  'addCommunity()',
  'updateCommunityStats()',
  'addEvent()',
  'updateEventStatus()',
  'getCommunity()',
  'getEvent()',
]
