import {
	ACTIVITES,
	BASIC,
	CERTIFICATES,
	EDUCATIONS,
	FOREIGN_LANGUAGES,
	FREE_QUESTION_ANSWERS,
	INTRODUCE,
	PORTFOLIO_ATTACH_FILES,
	PROJECTS,
	WORK_EXPERIENCES,
} from './data.js';
import { ResumeTemplate } from './type.js';

type SectionName = keyof ResumeTemplate & 'basic';
const sectionName: Record<SectionName, string> = {
	basic: '기본',
	techStack: '기술 스택',
	workExperiences: '경력',
	foreignLanguages: '외국어',
	projects: '프로젝트',
	portfolioAttachFiles: '포트폴리오 - 첨부 파일',
	portfolioLinks: '포트폴리오 - 링크',
	activities: '대외 활동',
	educations: '교육',
	certificates: '자격증',
	freeQuestionAnswers: '지원자에게 묻는 질문',
	introduce: '자기소개',
};

const T_Layout = (templateString: string) => /*html*/ `
	<section>
		<aside>
			<h2>기본 설정</h2>
			<p>데이터를 관리합니다.</p>
			<form class="settings__form">
				${templateString}	
			</form>
		</aside>
	</section>
`;

const T_TechStackSection = /*html*/ `
	<section class="settings__techStack">
		<h3>기술 스택 섹션</h3>
		<section>
			<input type="number" id="settings__techStack-count-toggle" value="1"/>
		</section>
	</section>
`;

const T_PortfolioLinksSection = /*html*/ `
	<section class="settings__portfolioLinks">
		<h3>포트폴리오 - 링크 섹션</h3>
		<section>
			<input type="number" id="settings__portfolioLinks-count-toggle" value="1"/>
		</section>
	</section>
`;

const isString = (key: string | number | symbol): key is string => {
	return typeof key === 'string';
};

const generateResumeSection = (
	section: keyof SectionName,
	fields: Record<string, string>,
): string => {
	const sectionString = isString(section) ? section : section.toString();

	const sectionHTML = `
    <section class="settings__${sectionName}">
      <h3>${sectionName[section]} 섹션</h3>
      <section>
				${
					sectionString === 'basic' || sectionString === 'introduce'
						? ''
						: `<input type="number" id="settings__${sectionString}-count-toggle" value="1"/>`
				}				
        ${Object.entries(fields)
					.map(
						([fieldName]) => `
            <input type="checkbox" id="settings__${sectionString}-${fieldName}-toggle" checked />
            <label for="settings__${sectionString}-${fieldName}-toggle">${fieldName}</label>
          `,
					)
					.join('')}
      </section>
    </section>
  `;

	return sectionHTML;
};

export const T_list_sections = () => {
	const sections = [
		T_TechStackSection,
		generateResumeSection('basic', BASIC),
		generateResumeSection('workExperiences', WORK_EXPERIENCES[0]),
		generateResumeSection('foreignLanguages', FOREIGN_LANGUAGES[0]),
		generateResumeSection('projects', PROJECTS[0]),
		generateResumeSection('portfolioAttachFiles', PORTFOLIO_ATTACH_FILES[0]),
		T_PortfolioLinksSection,
		generateResumeSection('activities', ACTIVITES[0]),
		generateResumeSection('educations', EDUCATIONS[0]),
		generateResumeSection('certificates', CERTIFICATES[0]),
		generateResumeSection('freeQuestionAnswers', FREE_QUESTION_ANSWERS[0]),
		generateResumeSection('introduce', INTRODUCE),
	];

	return T_Layout(sections.join(''));
};
