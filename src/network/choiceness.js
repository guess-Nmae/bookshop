import {request} from "./request";

export function getChoMultidata() {
  return request({
    url:'/home/multidata'
  })
}
