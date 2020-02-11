import 'whatwg-fetch'
export default class DataRequest {
    getData = async (usemode,api_id) => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id='+api_id+'&mode='+usemode, {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return body
    };
    getObjDoc= async (usemode,api_id,object_id) => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id='+api_id+'&mode='+usemode+'&obj_id='+object_id, {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return body
    };
}