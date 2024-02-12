import { cloneDeep } from 'lodash-es';
import {
	ACTIVITES,
	BASIC,
	CERTIFICATES,
	EDUCATIONS,
	FOREIGN_LANGUAGES,
	FREE_QUESTION_ANSWERS,
	INTRODUCE,
	PORTFOLIOS_LINKS,
	PORTFOLIO_ATTACH_FILES,
	PROJECTS,
	TECH_STACK,
	WORK_EXPERIENCES,
} from './data.js';
import { E_Settings, EventManager } from './settingEvents.js';
import { ResumeTemplate } from './type.js';

declare const Handlebars: any;

const compile = async (
	source: string,
	data: ResumeTemplate,
	eventManager: EventManager,
) => {
	const $content = document.querySelector('.universe__content');

	// handlebar 실행
	const template = Handlebars.compile(source);

	if ($content === undefined || $content === null) {
		return;
	}
	$content.innerHTML = template(data);

	// compile 할 때 마다 새로 이벤트를 생성
	E_Settings(events(source, data), eventManager);
};

const events = (source: string, data: ResumeTemplate) => {
	return [
		...eventsWithCount(source, data),
		...eventsWithCheckbox(source, data),
	];
};

const defaultSectionWithCount = cloneDeep({
	techStack: TECH_STACK.skills,
	workExperiences: WORK_EXPERIENCES,
	portfolioLinks: PORTFOLIOS_LINKS,
	portfolioAttachFiles: PORTFOLIO_ATTACH_FILES,
	activities: ACTIVITES,
	educations: EDUCATIONS,
	certificates: CERTIFICATES,
	foreignLanguages: FOREIGN_LANGUAGES,
	projects: PROJECTS,
	freeQuestionAnswers: FREE_QUESTION_ANSWERS,
});

const dataSeperatedPortfoilo = (data: ResumeTemplate, section: string) => {
	if (section === 'portfolioLinks') {
		return data.portfolio?.links ?? [];
	}

	if (section === 'portfolioAttachFiles') {
		return data.portfolio?.attachFiles ?? [];
	}

	return data[section];
};

const eventsWithCount = (source: string, data: ResumeTemplate) => {
	return Object.keys(defaultSectionWithCount).map((section) => {
		const result = {
			selectorString: `#settings__${section}-count-toggle`,
			source,
			data,
			callback: (selector: HTMLInputElement) => {
				const maxCount =
					Number(selector.value) <= 0 ? 0 : Number(selector.value);
				const dataLength = dataSeperatedPortfoilo(data, section).length;
				const initialLength = defaultSectionWithCount[section].length;

				let count = 0;
				if (maxCount <= dataLength) {
					while (dataLength - maxCount > count) {
						dataSeperatedPortfoilo(data, section).pop();

						count++;
					}

					return;
				}

				while (maxCount - dataLength > count) {
					const itemIndex =
						initialLength >= count ? count : initialLength % count;
					dataSeperatedPortfoilo(data, section).push(
						defaultSectionWithCount[section][itemIndex],
					);

					count++;
				}
			},
		};

		return result;
	});
};

const defaultSectionWithCheckbox = cloneDeep({
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
});

const eventsWithCheckbox = (source: string, data: ResumeTemplate) => {
	return Object.keys(defaultSectionWithCheckbox).flatMap((section) => {
		const itemsBySection = defaultSectionWithCheckbox[section];

		const result = Object.keys(itemsBySection).map((itemKey) => {
			return {
				selectorString: `#settings__${section}-${itemKey}-toggle`,
				source,
				data,
				callback: (selector: HTMLInputElement) => {
					if (section === 'basic' || section === 'introduce') {
						data[itemKey] = selector.checked ? itemsBySection[itemKey] : '';

						return;
					}

					if (section === 'portfolioAttachFiles') {
						if (
							data.portfolio === undefined ||
							data.portfolio?.attachFiles.length === 0
						) {
							return;
						}

						data.portfolio.attachFiles[0][itemKey] = selector.checked
							? itemsBySection[itemKey]
							: '';

						return;
					}

					if (section === 'portfolioLinks') {
						if (
							data.portfolio === undefined ||
							data.portfolio?.links.length === 0
						) {
							return;
						}

						data.portfolio.links[0][itemKey] = selector.checked
							? itemsBySection[itemKey]
							: '';

						return;
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
