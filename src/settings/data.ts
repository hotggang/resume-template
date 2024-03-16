import { cloneDeep } from 'lodash-es';
import {
	Activity,
	Certificate,
	Education,
	ForeignLanguage,
	FreeQuestionAnswer,
	PortfolioAttachFile,
	Project,
	ResumeTemplate,
	TechStack,
	WorkExperience,
} from './type.js';

export const BASIC = {
	job: 'UIUX디자이너',
	email: 'rallit@inflab.com',
	phoneNumber: '01012345678',
	address: '서울특별시 구로구 임의로 1길 23 가산중앙센트럴아파트 123동 123호',
	coverLetter: '',
	profileImage: '',
};

export const TECH_STACK: TechStack = {
	skills: ['React', 'Photoshop', 'Javascript', 'Html', 'SCSS', 'Figma', 'TypeScript', 'Angular'],
};

export const WORK_EXPERIENCES: WorkExperience[] = [
	{
		companyName: 'ABC Corp',
		departmentName: 'Web Development',
		role: 'Frontend Developer',
		workType: '정규직',
		employmentStatus: '재직 중',
		workStartedAt: '2019-01-01',
		workEndedAt: '2023-02-01',
		assignedTask:
			'Developed and maintained client-facing web applications using React and Redux.',
	},
	{
		companyName: '금빛 도서관',
		departmentName: '디자인팀',
		role: '주임',
		workType: '정규직',
		employmentStatus: '퇴사',
		workStartedAt: '2023-01-01',
		workEndedAt: '2023-02-01',
		assignedTask: '무슨 말을 길게 써야 있어보일까',
	},
];

export const FOREIGN_LANGUAGES: ForeignLanguage[] = [
	{
		foreignLanguageName: 'English',
		foreignLanguageGrade: 'Intermediate',
	},
];

export const PROJECTS: Project[] = [
	{
		projectName: 'Project Name',
		projectStatus: 'Project Status',
		projectStartedAt: '2020-01-01',
		projectEndedAt: '2020-01-01',
		projectDescription: 'Project Description',
		projectOrganization: 'Project Organization',
	},
];

export const PORTFOLIOS_LINKS: string[] = [
	'https://www.google.com',
	'https://www.naver.com',
];

export const PORTFOLIO_ATTACH_FILES: PortfolioAttachFile[] = [
	{
		attachFileName: 'Attach File Name',
		attachFileUrl: 'https://www.google.com',
		attachFileUploadedAt: '2020-01-01',
	},
];

export const ACTIVITES: Activity[] = [
	{
		activityName: 'Activity Name',
		activityYear: '2020',
		activityDescription: 'Activity Description',
		activityOrganization: 'Activity Organization',
	},
];

export const EDUCATIONS: Education[] = [
	{
		schoolType: 'School Type',
		schoolName: 'School Name',
		major: 'Major',
		graduationStatus: 'Graduation Status',
		enrollmentStartedAt: '2020-01-01',
		enrollmentEndedAt: '2020-01-01',
	},
];

export const CERTIFICATES: Certificate[] = [
	{
		certificateName: '정보처리기사',
		certificateGrade: '1급',
		certificatedAt: '2023',
		certificateOrganization: '대한 상공회의소',
	},
];

export const FREE_QUESTION_ANSWERS: FreeQuestionAnswer[] = [
	{
		question:
			'자기소개서 이외에 해당 포지션을 선택한 이유와 우리 회사에 지원하게 된 동기를 작성해주세요',
		answer:
			'UIUX 프로젝트를 진행하며 다양한 팀과 소통하여 문제를 해결해 나가는 과정이 흥미로웠고, 평소에 해당 분야에 대해 관심이 많아 프로덕트를 개발하고 싶었습니다.',
	},
];

export const INTRODUCE = {
	introduce:
		'안녕하세요. 저는 김랠릿입니다. 해당 영역은 짧은 자기소개를 위하여 만들어졌으며, 기재되는 내용에는 테스트 이상의 의미는 없습니다. 이외의 메시지가 출력된다면, 반드시 작업자에게 문의해 주시길 바랍니다.',
};

export const initResumeData: ResumeTemplate = cloneDeep({
	...BASIC,
	...INTRODUCE,
	name: '김랠릿',
	countryNumber: '82',
	addressMain: '서울특별시 구로구 임의로 1길',
	addressBuildingName: '23 가산중앙센트럴아파트',
	zipCode: '',
	techStack: TECH_STACK,
	workExperiences: [WORK_EXPERIENCES[0]],
	foreignLanguages: [FOREIGN_LANGUAGES[0]],
	projects: [PROJECTS[0]],
	portfolio: {
		links: [PORTFOLIOS_LINKS[0]],
		attachFiles: [PORTFOLIO_ATTACH_FILES[0]],
	},
	activities: [ACTIVITES[0]],
	educations: [EDUCATIONS[0]],
	certificates: [CERTIFICATES[0]],
	freeQuestionAnswers: [FREE_QUESTION_ANSWERS[0]],
	resumeSequence: {},
	cdnDomain: '',
});
