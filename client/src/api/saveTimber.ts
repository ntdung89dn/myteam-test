import { globalApi } from "../share/config/globalApi";

export function saveTimber(timberValue: string) {
  return globalApi.post(`/timber`, JSON.parse(timberValue));
}