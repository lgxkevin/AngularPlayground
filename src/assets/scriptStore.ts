import { keys } from '../keys';

interface Scripts {
  name: string;
  src: string;
}

export const CDNLinks = {
  googleMapPrefix: 'https://maps.googleapis.com/maps/api/js?key='
};

export const ScriptStore: Scripts[] = [
  { name: 'googleMap', src: CDNLinks.googleMapPrefix + keys.GOOGLE_API_KEY }
];