    import 'whatwg-fetch'
export default class CatalogSource {
    getData = async () => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id=6740550421865394949&mode=getcatalog', {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return {
            objects: body.data
        };

    };
}
  