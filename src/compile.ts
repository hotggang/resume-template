import Handlebars from 'handlebars';
import { ResumeTemplate } from 'type';

export const compile = async (source: string, data: ResumeTemplate) => {
	const $content = document.querySelector('.universe__content');

	// handlebar 실행
	const template = Handlebars.compile(source);

	if ($content === undefined || $content === null) {
		return;
	}
	$content.innerHTML = template(data);

	// 이벤트 새로 생성
	E_basicSections(source, data);
};

// compile 할 때 마다 새로 이벤트를 생성
export const E_basicSections = (source: string, data: ResumeTemplate) => {
	const $name = document.querySelector(
		'#settings__basic-name-toggle',
	) as HTMLInputElement;

	if ($name === undefined || $name === null) {
		return;
	}

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
