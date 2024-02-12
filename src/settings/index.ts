import { cloneDeep } from 'lodash-es';
import compile from './compile';
import { initResumeData } from './data';
import { eventManager } from './settingEvents';
import { T_list_sections } from './settingTemplates';

(() => {
	// 최초 로드 시, setting 템플릿 추가
	const $section = document.querySelector('#common__data-settings')!;
	$section.innerHTML = T_list_sections();

	// 기존 handlebar 문법의 코드 저장
	const source = document.querySelector('.universe__content')!.innerHTML;

	const initEventManager = eventManager();
	const initData = cloneDeep(initResumeData);

	// 최초 handlerbar 컴파일
	compile(source, initData, initEventManager);

	// 설정 이벤트
	const $btnAsideSettings = document.querySelector('.e-settings__open-aside');
	const $btnAsideSettingsClose = document.querySelector(
		'.e-settings__close-aside',
	)!;
	const $asideSettings = document.querySelector('.e-settings__aside')!;

	[$btnAsideSettings, $btnAsideSettingsClose].map((item) => {
		item!.addEventListener('click', () => {
			$asideSettings.setAttribute(
				'aria-expanded',
				$asideSettings.getAttribute('aria-expanded') === 'true'
					? 'false'
					: 'true',
			);
		});
	});
})();
