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

export const TECH_STACK: TechStack = {
	skills: ['React', 'Photoshop', 'Javascript'],
};

export const WORK_EXPERIENCES: WorkExperience[] = [
	{
		companyName: 'ABC Corp',
		departmentName: 'Web Development',
		role: 'Frontend Developer',
		workType: '업무 타입1',
		employmentStatus: '업무 상태1',
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
		employmentStatus: '재직 중',
		workStartedAt: '2023-01-01',
		workEndedAt: '2023-02-01',
		assignedTask: '무슨 말을 길게 써야 있어보일까',
	},
];

export const FOREIGN_LANGUAGE: ForeignLanguage = {
	foreignLanguageName: 'English',
	foreignLanguageGrade: 'Intermediate',
};

export const PROJECT: Project = {
	projectName: 'Project Name',
	projectStatus: 'Project Status',
	projectStartedAt: '2020-01-01',
	projectEndedAt: '2020-01-01',
	projectDescription: 'Project Description',
	projectOrganization: 'Project Organization',
};

export const PORTFOLIO_ATTACH_FILE: PortfolioAttachFile = {
	attachFileName: 'Attach File Name',
	attachFileUrl: 'https://www.google.com',
	attachFileUploadedAt: '2020-01-01',
};

export const ACTIVITY: Activity = {
	activityName: 'Activity Name',
	activityYear: '2020',
	activityDescription: 'Activity Description',
	activityOrganization: 'Activity Organization',
};

export const EDUCATION: Education = {
	schoolType: 'School Type',
	schoolName: 'School Name',
	major: 'Major',
	graduationStatus: 'Graduation Status',
	enrollmentStartedAt: '2020-01-01',
	enrollmentEndedAt: '2020-01-01',
};

export const CERTIFICATE: Certificate = {
	certificateName: '정보처리기사',
	certificateGrade: '1급',
	certificatedAt: '2023',
	certificateOrganization: '대한 상공회의소',
};

export const FREE_QUESTION_ANSWER: FreeQuestionAnswer = {
	question: '질문',
	answer: '답변',
};

export const initResumeData: ResumeTemplate = {
	name: '김랠릿',
	job: 'UIUX디자이너',
	email: 'rallit@inflab.com',
	countryNumber: '82',
	phoneNumber: '01012345678',
	addressMain: '서울특별시 구로구 임의로 1길',
	addressBuildingName: '23 가산중앙센트럴아파트',
	zipCode: '',
	coverLetter: '',
	profileImage: '',
	techStack: {
		skills: ['FIGMA', 'PHOTOSHOP', 'ILLUSTRATOR'],
	},
	workExperiences: [WORK_EXPERIENCES[0]],
	foreignLanguages: [
		{
			foreignLanguageName: '',
			foreignLanguageGrade: '',
		},
	],
	projects: [
		{
			projectName: '',
			projectStatus: '',
			projectStartedAt: '',
			projectEndedAt: '',
			projectDescription: '',
			projectOrganization: '',
		},
	],
	portfolio: {
		links: [],
		attachFiles: [
			{
				attachFileName: '',
				attachFileUrl: '',
				attachFileUploadedAt: '',
			},
		],
	},
	activities: [
		{
			activityName: '',
			activityYear: '',
			activityDescription: '',
			activityOrganization: '',
		},
	],
	educations: [
		{
			schoolType: '',
			schoolName: '',
			major: '',
			graduationStatus: '',
			enrollmentStartedAt: '',
			enrollmentEndedAt: '',
		},
	],
	certificates: [
		{
			certificateName: '',
			certificateGrade: '',
			certificatedAt: '',
			certificateOrganization: '',
		},
	],
	freeQuestionAnswers: [
		{
			question: '',
			answer: '',
		},
	],
	introduce: '',
	resumeSequence: {},
	cdnDomain: '',
};
