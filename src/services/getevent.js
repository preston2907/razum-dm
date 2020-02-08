import 'whatwg-fetch'
export default class EventSource {
  getData = async () => {
    const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id=6735304360472500779&mode=getevents', {
      credentials: 'include',
      cache: 'no-cache'
    });
    const body = await res.json();
    return {
      objects: body.data
    };

  };

  _transformData = data => {
    if (data.type === "training") {

      let changeStatus = data => {
        let status = "";
        switch (data.state) {
          case "plan":
            status = "Запланирован";
            break;

          case "close":
            status = "Завершен";
            break;

          case "active":
            status = "В процессе";
            break;

          default:
            status = "";
        }
        return status;
      };

      let setClass = data => {
        let statusClass = "";
        switch (data.state) {
          case "plan":
            statusClass = "c_assigned"
            break;

          case "active":
            statusClass = "c_progress"
            break;



          case "close":
            statusClass = "c_success"
            break;

          default:
            statusClass = ""
        }
        return statusClass;
      };

      return {
        id: data.id,
        type: data.type,
        title: data.title,
        url: data.url,
        timeLimit: data.timeLimit,
        state: changeStatus(data),
        status_class: setClass(data),
        progress: data.progress,
        is_required: data.is_required === true ? "Обязательный" : "Рекомендованный",
        startDate: data.startDate,
        link: data.target,
        showBadge: data.showBadge,
        showDuration: data.showDuration
      };
    }




  };

  _getTransformData = () => {
    let items = this.getData();
    return items.objects.map(elem => this._transformData(elem));
  };

  _getFilteredData = (flag) => {
    let items = this.getData();
    return items.then((data) => {
      let arrToReturn = [];
      if (flag === 'active') {
        arrToReturn = data.objects.filter((elem) => (elem.state === 'active'))
      } else {
        arrToReturn = data.objects.filter((elem) => (elem.state !== 'active'))
      }

      return arrToReturn.map(elem => {
        return this._transformData(elem)
      })
    })
  }
}
