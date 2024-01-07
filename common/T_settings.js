// const html = String.raw;

const T_settings = `
	<section>
		<button type="button">설정</button>
		<aside>
			<h2>기본 설정</h2>
			<p>데이터를 관리합니다.</p>
			<form class="settings__form">
				<section class="settings__basic">
					<input type="checkbox" id="settings__basic-name-toggle" checked />
					<label for="settings__basic-name-toggle">name</label>
					<input type="checkbox" id="settings__basic-job-toggle" checked />
					<label for="settings__basic-job-toggle">job</label>
					<input type="checkbox" id="settings__basic-email-toggle" checked />
					<label for="settings__basic-email-toggle">email</label>
				</section>
			</form>
		</aside>
	</section>
`;

export default T_settings;
