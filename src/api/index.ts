import  service  from "./request";
const API_MAIN = '/analyse'
interface paramsI {
  code: number,
  data: any
}
export const groupList = ()=> {
  return service({
    url: API_MAIN + '/group/list',
    method: 'get'
  })
}