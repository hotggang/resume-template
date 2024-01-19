import { ACTIVITES, BASIC, CERTIFICATES, EDUCATIONS, FOREIGN_LANGUAGES, FREE_QUESTION_ANSWERS, INTRODUCE, PORTFOLIO_ATTACH_FILES, PROJECTS, TECH_STACK, WORK_EXPERIENCES, } from './data.js';
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
    return [
        ...eventsWithCount(source, data),
        ...eventsWithCheckbox(source, data),
    ];
};
const SECTION_WITH_COUNT = {
    techStack: TECH_STACK.skills,
    workExperiences: WORK_EXPERIENCES,
    portfolioLinks: PORTFOLIO_ATTACH_FILES,
    portfolioAttachFiles: PORTFOLIO_ATTACH_FILES,
    activities: ACTIVITES,
    educations: EDUCATIONS,
    certificates: CERTIFICATES,
    foreignLanguages: FOREIGN_LANGUAGES,
    projects: PROJECTS,
    freeQuestionAnswers: FREE_QUESTION_ANSWERS,
};
const eventsWithCount = (source, data) => {
    return Object.keys(SECTION_WITH_COUNT).map((section) => {
        const result = {
            selectorString: `#settings__${section}-count-toggle`,
            source,
            data,
            callback: (selector) => {
                const maxCount = Number(selector.value) <= 0 ? 0 : Number(selector.value);
                const dataLength = data[section].length;
                const initialLength = SECTION_WITH_COUNT[section].length;
                let count = 0;
                if (maxCount <= dataLength) {
                    while (dataLength - maxCount > count) {
                        data[section].pop();
                        count++;
                    }
                    return;
                }
                while (maxCount - dataLength > count) {
                    const itemIndex = initialLength >= count ? count : initialLength % count;
                    data[section].push(SECTION_WITH_COUNT[section][itemIndex]);
                    count++;
                }
            },
        };
        return result;
    });
};
const SECTION_WITH_CHECKBOX = {
    basic: BASIC,
    introduce: INTRODUCE,
    workExperiences: WORK_EXPERIENCES[0],
    foreignLanguages: FOREIGN_LANGUAGES[0],
    projects: PROJECTS[0],
    portfolioAttachFiles: PORTFOLIO_ATTACH_FILES[0],
    activities: ACTIVITES[0],
    educations: EDUCATIONS[0],
    certificates: CERTIFICATES[0],
    freeQuestionAnswers: FREE_QUESTION_ANSWERS[0],
};
const eventsWithCheckbox = (source, data) => {
    return Object.keys(SECTION_WITH_CHECKBOX).flatMap((section) => {
        const itemsBySection = SECTION_WITH_CHECKBOX[section];
        const result = Object.keys(itemsBySection).map((itemKey) => {
            return {
                selectorString: `#settings__${section}-${itemKey}-toggle`,
                source,
                data,
                callback: (selector) => {
                    if (section === 'basic' || section === 'introduce') {
                        data[section][itemKey] = selector.checked
                            ? itemsBySection[itemKey]
                            : '';
                    }
                    if (data[section].length === 0) {
                        return;
                    }
                    data[section][0][itemKey] = selector.checked
                        ? itemsBySection[itemKey]
                        : '';
                },
            };
        });
        return result;
    });
};
export default compile;
