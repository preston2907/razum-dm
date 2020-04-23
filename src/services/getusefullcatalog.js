import 'whatwg-fetch'
export default class UsefullCatalog {
    getData = async () => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id=6815929154105931101&mode=getusefulcatalog', {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return {
            objects: body.data
        };

    };



}
  