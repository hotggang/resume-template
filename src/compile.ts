import { initResumeData } from './data.js';
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
	E_Settings(
		[
			{
				selectorString: '#settings__basic-name-toggle',
				source,
				data,
				callback: (selector: HTMLInputElement) => {
					data.name = selector.checked ? initResumeData['name'] : '';
				},
			},
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
		],
		eventManager,
	);
};

export default compile;
