import { initResumeData } from './data.js';
import { E_Settings } from './settingEvents.js';
const compile = async (source, data, eventManager) => {
    const $content = document.querySelector('.universe__content');
    const template = Handlebars.compile(source);
    if ($content === undefined || $content === null) {
        return;
    }
    $content.innerHTML = template(data);
    E_Settings([
        {
            selectorString: '#settings__basic-name-toggle',
            source,
            data,
            callback: (selector) => {
                data.name = selector.checked ? initResumeData['name'] : '';
            },
        },
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
    ], eventManager);
};
export default compile;
