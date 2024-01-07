import compile from './compile.js';
import { ResumeTemplate } from './type.js';

type SettingEvent = {
	selectorString: string;
	source: string;
	data: ResumeTemplate;
	callback: (selector: HTMLInputElement) => void;
};

export const E_Settings = (
	data: SettingEvent[],
	eventManager: EventManager,
) => {
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

export type Event = () => void;
export type EventManager = {
	queue: Event[];
	reset: (remainingCount: number) => Event[];
	push: (event: Event) => Event[];
};

/**
 * Event Manager: 설정 모듈 내에서 사용되는 이벤트 리스너를 관리
 * @description 새로운 데이터를 리스너에 전달해야함에 따라 이전의 리스너를 제거하고, 새로운 리스너를 요소에 추가
 */
export const eventManager: () => EventManager = () => {
	/** 활성화된 이벤트 리스너를 대기시키는 배열 */
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
