export const compile = async (source, data, removeEvents) => {
    const $content = document.querySelector('.universe__content');
    // handlebar 실행
    const template = Handlebars.compile(source);
    if ($content === undefined || $content === null) {
        return;
    }
    $content.innerHTML = template(data);
    console.log('compile', removeEvents.events.length);
    // 이벤트 새로 생성
    E_Settings([
        {
            selectorString: '#settings__basic-name-toggle',
            source,
            data,
            callback: (selector) => {
                data.name = selector.checked ? '테스트' : '';
            },
        },
        {
            selectorString: '#settings__basic-job-toggle',
            source,
            data,
            callback: (selector) => {
                data.job = selector.checked ? '테스트' : '';
            },
        },
        {
            selectorString: '#settings__basic-email-toggle',
            source,
            data,
            callback: (selector) => {
                data.email = selector.checked ? '테스트' : '';
            },
        },
    ], removeEvents);
};
export const E_Settings = (data, removeEvents) => {
    const events = setEvents(data, removeEvents);
    console.log('after setEvents', removeEvents.events.length);
    events.map(({ selector, handleChecked }) => {
        selector.addEventListener('change', handleChecked);
    });
};
const setEvents = (events, removeEvents) => {
    return events.map(({ selectorString, source, data, callback }) => {
        const $input = document.querySelector(selectorString);
        if ($input === undefined || $input === null) {
            throw new Error('존재하지 않는 element 입니다.');
        }
        const handleChecked = () => {
            // 데이터 변경
            callback($input);
            console.log('handleChecked');
            // 기존 이벤트 제거
            removeEvents.events.forEach((removeEvent) => {
                removeEvent();
            });
            removeEvents.reset(events.length);
            // 변경된 데이터로 handlebar 컴파일
            compile(source, data, removeEvents);
        };
        removeEvents.push(() => {
            $input.removeEventListener('change', handleChecked);
            console.log('remove', 'remove callback');
        });
        return { selector: $input, handleChecked: handleChecked };
    });
};
export const resetEvents = () => {
    let events = [];
    const reset = function (remainingCount) {
        events.splice(0, remainingCount);
        return events;
    };
    const push = function (event) {
        events.push(event);
        return events;
    };
    return { events, reset, push };
};
