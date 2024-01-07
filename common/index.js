import { initData } from '../dist/src/data.js';
import T_settings from './T_settings.js';

const compile = async (source, data) => {
	const $content = document.querySelector('.universe__content');

	// handlebar 실행
	const template = Handlebars.compile(source);
	$content.innerHTML = template(data);

	// 이벤트 새로 생성
	E_basicSections(source, data);
};

// compile 할 때 마다 새로 이벤트를 생성
const E_basicSections = (source, data) => {
	const $name = document.querySelector('#settings__basic-name-toggle');

	const handleChecked = function check() {
		// 데이터 변경
		data.name = $name.checked ? '테스트' : '';

		// 변경된 데이터로 handlebar 컴파일
		compile(source, data);

		// 실행되고 있는 현재 이벤트 제거
		$name.removeEventListener('change', check);
	};

	// 이벤트 생성
	$name.addEventListener('change', handleChecked);
};

(() => {
	// 최초 로드 시, setting 템플릿 추가
	const $section = document.querySelector('#common__data-settings');
	$section.innerHTML = T_settings;

	// 기존 handlebar 문법의 코드 저장
	const source = document.querySelector('.universe__content').innerHTML;

	// 최초 handlerbar 컴파일
	compile(source, initData);
})();
