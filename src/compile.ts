import { ResumeTemplate } from 'type';

declare const Handlebars: any;

export const compile = async (
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
					data.name = selector.checked ? '테스트' : '';
				},
			},
			{
				selectorString: '#settings__basic-job-toggle',
				source,
				data,
				callback: (selector: HTMLInputElement) => {
					data.job = selector.checked ? '테스트' : '';
				},
			},
			{
				selectorString: '#settings__basic-email-toggle',
				source,
				data,
				callback: (selector: HTMLInputElement) => {
					data.email = selector.checked ? '테스트' : '';
				},
			},
		],
		eventManager,
	);
};

type SettingEvent = {
	selectorString: string;
	source: string;
	data: ResumeTemplate;
	callback: (selector: HTMLInputElement) => void;
};

const E_Settings = (data: SettingEvent[], eventManager: EventManager) => {
	const events = setEvents(data, eventManager);

	events.map(({ selector, handleChecked }) => {
		selector.addEventListener('change', handleChecked);
	});
};

const setEvents = (
	events: SettingEvent[],
	eventManager: EventManager,
): {
	selector: HTMLInputElement;
	handleChecked: () => void;
}[] => {
	return events.map(({ selectorString, source, data, callback }) => {
		const $input = document.querySelector(selectorString) as HTMLInputElement;

		if ($input === undefined || $input === null) {
			throw new Error('존재하지 않는 element 입니다.');
		}

		const handleChecked = () => {
			// 데이터 변경
			callback($input);
			console.log('handleChecked');

			// remove 리스너 호출 (이벤트 제거)
			eventManager.queue.forEach((removeEvent) => {
				removeEvent();
			});

			// 매니저 queue 에서 remove 리스너 함수 제거
			eventManager.reset(events.length);

			// 변경된 데이터로 handlebar 컴파일
			compile(source, data, eventManager);
		};

		// eventManager에 remove 리스너 추가
		eventManager.push(() => {
			$input.removeEventListener('change', handleChecked);
		});

		return { selector: $input, handleChecked: handleChecked };
	});
};

type Event = () => void;
type EventManager = {
	queue: Event[];
	reset: (remainingCount: number) => Event[];
	push: (event: Event) => Event[];
};

export const eventManager: () => EventManager = () => {
	let queue: (() => void)[] = [];

	const reset = function (remainingCount: number) {
		queue.splice(0, remainingCount);

		return queue;
	};

	const push = function (event: () => void) {
		queue.push(event);

		return queue;
	};

	return { queue, reset, push };
};
