import compile from '../dist/src/compile.js';
import { initResumeData } from '../dist/src/data.js';
import { eventManager } from '../dist/src/settingEvents.js';
import { T_list_sections } from '../dist/src/settingTemplates.js';

(() => {
	// 최초 로드 시, setting 템플릿 추가
	const $section = document.querySelector('#common__data-settings');
	$section.innerHTML = T_list_sections();

	// 기존 handlebar 문법의 코드 저장
	const source = document.querySelector('.universe__content').innerHTML;

	const initEventManager = eventManager();
	const initData = Object.assign({}, initResumeData);

	// 최초 handlerbar 컴파일
	compile(source, initData, initEventManager);
})();
