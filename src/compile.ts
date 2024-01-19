import { WORK_EXPERIENCES, initResumeData } from './data.js';
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
	const result = [
		{
			selectorString: '#settings__basic-job-toggle',
			source,
			data,
			callback: (selector: HTMLInputElement) => {
				data.job = selector.checked ? initResumeData['job'] : '';
			},
		},
		{
			selectorString: '#settings__basic-email-toggle',
			source,
			data,
			callback: (selector: HTMLInputElement) => {
				data.email = selector.checked ? initResumeData['email'] : '';
			},
		},
		{
			selectorString: '#settings__workExperiences-count-toggle',
			source,
			data,
			callback: (selector: HTMLInputElement) => {
				const maxCount =
					Number(selector.value) <= 0 ? 0 : Number(selector.value);
				const dataLength = data.workExperiences.length;
				const initialLength = WORK_EXPERIENCES.length;

				let count = 0;
				if (maxCount <= dataLength) {
					while (dataLength - maxCount > count) {
						const itemIndex =
							initialLength >= count ? count : initialLength % count;
						console.log(itemIndex);
						data.workExperiences.pop();

						count++;
					}

					return;
				}

				while (maxCount - dataLength > count) {
					const itemIndex =
						initialLength >= count ? count : initialLength % count;
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
