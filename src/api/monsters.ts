import config from '../config';

export function getMonstersAvatar (id: number): string {
  return `${config.app.api.robots}/${id}?set=set2&size=180x180`;
}
