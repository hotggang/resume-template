import { WORK_EXPERIENCES, initResumeData } from './data.js';
import { E_Settings } from './settingEvents.js';
const compile = async (source, data, eventManager) => {
    const $content = document.querySelector('.universe__content');
    const template = Handlebars.compile(source);
    if ($content === undefined || $content === null) {
        return;
    }
    $content.innerHTML = template(data);
    E_Settings(events(source, data), eventManager);
};
const events = (source, data) => {
    const result = [
        {
            selectorString: '#settings__basic-job-toggle',
            source,
            data,
            callback: (selector) => {
                data.job = selector.checked ? initResumeData['job'] : '';
            },
        },
        {
            selectorString: '#settings__basic-email-toggle',
            source,
            data,
            callback: (selector) => {
                data.email = selector.checked ? initResumeData['email'] : '';
            },
        },
        {
            selectorString: '#settings__workExperiences-count-toggle',
            source,
            data,
            callback: (selector) => {
                const maxCount = Number(selector.value) <= 0 ? 0 : Number(selector.value);
                const dataLength = data.workExperiences.length;
                const initialLength = WORK_EXPERIENCES.length;
                let count = 0;
                if (maxCount <= dataLength) {
                    while (dataLength - maxCount > count) {
                        const itemIndex = initialLength >= count ? count : initialLength % count;
                        console.log(itemIndex);
                        data.workExperiences.pop();
                        count++;
                    }
                    return;
                }
                while (maxCount - dataLength > count) {
                    const itemIndex = initialLength >= count ? count : initialLength % count;
                    console.log(itemIndex);
                    data.workExperiences.push(WORK_EXPERIENCES[itemIndex]);
                    count++;
                }
            },
        },
    ];
    return result;
};
export default compile;
