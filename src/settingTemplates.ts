import {
	ACTIVITES,
	CERTIFICATES,
	EDUCATIONS,
	FOREIGN_LANGUAGES,
	FREE_QUESTION_ANSWERS,
	PORTFOLIO_ATTACH_FILES,
	PROJECTS,
	WORK_EXPERIENCES,
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

export const T_BasicSection = /*html*/ `
	<section class="settings__basic">
		<h3>기본 섹션</h3>
		<section>
			<input type="checkbox" id="settings__basic-job-toggle" checked />
			<label for="settings__basic-job-toggle">job</label>
			<input type="checkbox" id="settings__basic-email-toggle" checked />
			<label for="settings__basic-email-toggle">email</label>
			<input type="checkbox" id="settings__basic-phoneNumber-toggle" checked />
			<label for="settings__basic-phoneNumber-toggle">phoneNumber</label>
			<input type="checkbox" id="settings__basic-address-toggle" checked />
			<label for="settings__basic-address-toggle">address</label>
			<input type="checkbox" id="settings__basic-coverLetter-toggle" checked />
			<label for="settings__basic-coverLetter-toggle">coverLetter</label>
			<input type="checkbox" id="settings__basic-profileImage-toggle" checked />
			<label for="settings__basic-profileImage-toggle">profileImage</label>
		</section>					
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

const T_IntroduceSection = /*html*/ `
	<section class="settings__introduce">
		<h3>자기소개 섹션</h3>
		<section>
			<input type="checkbox" id="settings__introduce-coverLetter-toggle" checked />
			<label for="settings__introduce-coverLetter-toggle">coverLetter</label>
		</section>
	</section>
`;

const generateResumeSection = (
	section: keyof typeof sectionName,
	fields: Record<string, string>,
): string => {
	const sectionHTML = `
    <section class="settings__${sectionName}">
      <h3>${sectionName[section]} 섹션</h3>
      <section>
				<input type="number" id="settings__${section}-count-toggle" value="1"/>
        ${Object.entries(fields)
					.map(
						([fieldName]) => `
            <input type="checkbox" id="settings__${section}-${fieldName}-toggle" checked />
            <label for="settings__${section}-${fieldName}-toggle">${fieldName}</label>
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
		T_BasicSection,
		T_TechStackSection,
		generateResumeSection('workExperiences', WORK_EXPERIENCES[0]),
		generateResumeSection('foreignLanguages', FOREIGN_LANGUAGES[0]),
		generateResumeSection('projects', PROJECTS[0]),
		generateResumeSection('portfolioAttachFile', PORTFOLIO_ATTACH_FILES[0]),
		T_PortfolioLinksSection,
		generateResumeSection('activities', ACTIVITES[0]),
		generateResumeSection('educations', EDUCATIONS[0]),
		generateResumeSection('certificates', CERTIFICATES[0]),
		generateResumeSection('freeQuestionAnswers', FREE_QUESTION_ANSWERS[0]),
		T_IntroduceSection,
	];

	return T_Layout(sections.join(''));
};
