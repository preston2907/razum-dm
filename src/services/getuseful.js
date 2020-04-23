import 'whatwg-fetch'
export default class Usefull {
    getData = async () => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id=6815929154105931101&mode=getuseful', {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return {
            objects: body.data
        };

    };

    _getFilteredData = (flag) => {
        let items = this.getData();
        return items.then((data) => {
            let arrToReturn = [];
            if (flag === 'development') {
                arrToReturn = data.objects.filter((elem) => (elem.type === 'development'))
            } else {
                arrToReturn = data.objects.filter((elem) => (elem.type === 'motivation'))
            }

            return arrToReturn
        })
    }

}
  