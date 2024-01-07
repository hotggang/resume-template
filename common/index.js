import { compile } from '../dist/src/compile.js';
import { initData } from '../dist/src/data.js';
import T_settings from './T_settings.js';

(() => {
	// 최초 로드 시, setting 템플릿 추가
	const $section = document.querySelector('#common__data-settings');
	$section.innerHTML = T_settings;

	// 기존 handlebar 문법의 코드 저장
	const source = document.querySelector('.universe__content').innerHTML;

	// 최초 handlerbar 컴파일
	compile(source, initData);
})();
