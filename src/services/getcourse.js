import 'whatwg-fetch'
export default class CoursesSource {
    getData = async () => {
        const res = await fetch('https://bu-online.beeline.ru/custom_web_template.html?object_id=6735304360472500779&mode=getcourses', {
            credentials: 'include',
            cache: 'no-cache'
        });
        const body = await res.json();
        return {
            objects: body.data
        };

    };

    _transformData = data => {

        if (data.type === "course" || data.type === "test") {
            let changeStatus = data => {
                let status = "";
                switch (data.state) {
                    case "0":
                        status = "Назначен";
                        break;

                    case "1":
                        status = "В процессе";
                        break;

                    case "3":
                        status = "Не пройден";
                        break;

                    case "4":
                        status = "Пройден";
                        break;

                    default:
                        status = "";
                }
                return status;
            };

            let setClass = data => {
                let statusClass = "";
                switch (data.state) {
                    case "0":
                        statusClass = "c_assigned"
                        break;

                    case "1":
                        statusClass = "c_progress"
                        break;

                    case "3":
                        statusClass = "c_fail"
                        break;

                    case "4":
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
                is_required:
                    data.is_required === true ? "Обязательный" : "Рекомендованный",
                deadline: data.deadline,
                link: data.link
            };
        }




    };



    _getFilteredData = (flag) => {
        let items = this.getData();
        return items.then((data) => {
            let arrToReturn = [];
            if (flag === 'finished') {
                arrToReturn = data.objects.filter((elem) => (elem.state === '4' || elem.state ==='3'))
            } else {
                arrToReturn = data.objects.filter((elem) => (elem.state !== '4' && elem.state !=='3'))
            }

            return arrToReturn.map(elem => {
                return this._transformData(elem)
            })
        })
    }
}
