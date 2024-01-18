import {
	ACTIVITY,
	CERTIFICATE,
	EDUCATION,
	FOREIGN_LANGUAGE,
	FREE_QUESTION_ANSWER,
	PORTFOLIO_ATTACH_FILE,
	PROJECT,
	WORK_EXPERIENCE,
} from './data.js';

const sectionName = {
	techStack: '기술 스택',
	workExperiences: '경력',
	foreignLanguages: '외국어',
	projects: '프로젝트',
	portfolioAttachFile: '포트폴리오 - 첨부 파일',
	portfolioLinks: '포트폴리오 - 링크',
	activities: '대외 활동',
	educations: '교육',
	certificates: '자격증',
	freeQuestionAnswers: '지원자에게 묻는 질문',
};

const generateResumeSection = (
	section: keyof typeof sectionName,
	fields: Record<string, string>,
): string => {
	const sectionHTML = `
    <section class="settings__basic">
      <h3>${sectionName[section]} 섹션</h3>
      <section>
        ${Object.entries(fields)
					.map(
						([fieldName]) => `
            <input type="checkbox" id="settings__basic-${fieldName}-toggle" checked />
            <label for="settings__basic-${fieldName}-toggle">${fieldName}</label>
          `,
					)
					.join('')}
      </section>
    </section>
  `;

	return sectionHTML;
};

export const T_sections = () => {
	// TODO: techStack, portfolioLinks, introduce 별도 처리
	const sections = [
		generateResumeSection('workExperiences', WORK_EXPERIENCE),
		generateResumeSection('foreignLanguages', FOREIGN_LANGUAGE),
		generateResumeSection('projects', PROJECT),
		generateResumeSection('portfolioAttachFile', PORTFOLIO_ATTACH_FILE),
		generateResumeSection('activities', ACTIVITY),
		generateResumeSection('educations', EDUCATION),
		generateResumeSection('certificates', CERTIFICATE),
		generateResumeSection('freeQuestionAnswers', FREE_QUESTION_ANSWER),
	];

	return sections.join('');
};
