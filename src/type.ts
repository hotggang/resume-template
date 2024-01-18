export type TechStack = {
	skills: string[];
};

export type WorkExperience = {
	companyName: string;
	departmentName: string;
	role: string;
	workType: string;
	employmentStatus: string;
	workStartedAt?: string;
	workEndedAt?: string;
	assignedTask?: string;
};

export type ForeignLanguage = {
	foreignLanguageName: string;
	foreignLanguageGrade: string;
};

export type Project = {
	projectName: string;
	projectStatus: string;
	projectStartedAt: string;
	projectEndedAt: string;
	projectDescription: string;
	projectOrganization: string;
};

export type PortfolioAttachFile = {
	attachFileName: string;
	attachFileUrl: string;
	attachFileUploadedAt: string;
};

export type Activity = {
	activityName: string;
	activityYear: string;
	activityDescription: string;
	activityOrganization: string;
};

export type Education = {
	schoolType: string;
	schoolName: string;
	major: string;
	graduationStatus: string;
	enrollmentStartedAt: string;
	enrollmentEndedAt: string;
};

export type Certificate = {
	certificateName: string;
	certificateGrade: string;
	certificatedAt: string;
	certificateOrganization: string;
};

export type FreeQuestionAnswer = {
	question: string;
	answer: string;
};

export type ResumeTemplate = {
	name: string;

	job: string;

	email: string;

	countryNumber?: string;

	phoneNumber?: string;

	addressMain?: string;

	addressBuildingName?: string;

	zipCode?: string;

	coverLetter: string;

	profileImage: string;

	techStack: TechStack;

	workExperiences: WorkExperience[];

	projects: Project[];

	portfolio?: {
		links: string[];
		attachFiles: PortfolioAttachFile[];
	};

	foreignLanguages: ForeignLanguage[];

	activities: Activity[];

	introduce: string;

	educations: Education[];

	resumeSequence: Record<string, number>;

	certificates: Certificate[];

	// 지원자에게 묻는 질문
	freeQuestionAnswers?: FreeQuestionAnswer[];

	createdAt?: string;

	templateTheme?: string;

	cdnDomain: string;
};
