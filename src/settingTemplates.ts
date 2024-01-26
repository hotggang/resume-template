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

type SectionName = keyof (ResumeTemplate & {
	basic: string;
	portfolioAttachFiles: string;
	portfolioLinks: string;
});

const sectionName: Partial<Record<Partial<SectionName>, string>> = {
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
	<div class="settings__open-aside-wrapper">
		<button type="button" class="settings__open-aside e-settings__open-aside">⚙️ 데이터 설정</button>
	<div>
	<aside class="settings__aside e-settings__aside" aria-expanded="false">
		<section class="settings__aside-title-wrapper">
			<h2>데이터 설정</h2>			
			<button type="button" class="e-settings__close-aside">ⅹ</button>
		</section>	
		<form class="settings__form">
			${templateString}	
		</form>
	</aside>
`;

const T_TechStackSection = /*html*/ `
	<section class="settings__section settings__techStack">
		<section class="settings__section-title-wrapper">
			<h3>기술 스택 섹션</h3>			
		</section>
		<div class="settings__checkbox-wrapper">
			<label for="settings__techStack-count-toggle">sections</label>
			<input type="number" id="settings__techStack-count-toggle" value="1" min="0" max="15"/>
		</div>
	</section>
`;

const T_PortfolioLinksSection = /*html*/ `
	<section class="settings__section settings__portfolioLinks">
		<section class="settings__section-title-wrapper">
			<h3>포트폴리오 - 링크 섹션</h3>			
		</section>
		<div class="settings__checkbox-wrapper">
			<label for="settings__portfolioLinks-count-toggle">sections</label>
			<input type="number" id="settings__portfolioLinks-count-toggle" value="1" min="0" max="15"/>
		</div>
	</section>
`;

const generateResumeSection = (
	section: keyof typeof sectionName,
	fields: Record<string, string>,
): string => {
	const sectionHTML = `
    <section class="settings__section settings__${section}">
			<section class="settings__section-title-wrapper">
      	<h3>${sectionName[section]} 섹션</h3>				
			</section>	
      <ul class="settings__section-rows">				
				${
					section === 'basic' || section === 'introduce'
						? ''
						: `<li class="settings__checkbox-wrapper"><label for="settings__${section}-count-toggle">sections</label><input type="number" id="settings__${section}-count-toggle" value="1" min="0" max="30"/></li>`
				}
        ${Object.entries(fields)
					.map(
						([fieldName]) => `
						<li class="settings__checkbox-wrapper">
            	<label for="settings__${section}-${fieldName}-toggle">${fieldName}</label>
            	<input type="checkbox" id="settings__${section}-${fieldName}-toggle" class="settings__checkbox" checked />							
						</li>
          `,
					)
					.join('')}
      </ul>
    </section>
  `;

	return sectionHTML;
};

export const T_list_sections = () => {
	const sections = [
		T_TechStackSection,
		T_PortfolioLinksSection,
		generateResumeSection('basic', BASIC),
		generateResumeSection('workExperiences', WORK_EXPERIENCES[0]),
		generateResumeSection('foreignLanguages', FOREIGN_LANGUAGES[0]),
		generateResumeSection('projects', PROJECTS[0]),
		generateResumeSection('portfolioAttachFiles', PORTFOLIO_ATTACH_FILES[0]),
		generateResumeSection('activities', ACTIVITES[0]),
		generateResumeSection('educations', EDUCATIONS[0]),
		generateResumeSection('certificates', CERTIFICATES[0]),
		generateResumeSection('freeQuestionAnswers', FREE_QUESTION_ANSWERS[0]),
		generateResumeSection('introduce', INTRODUCE),
	];

	return T_Layout(sections.join(''));
};
