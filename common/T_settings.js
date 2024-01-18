const T_settings = /*html*/ `
	<section>
		<button type="button">설정</button>
		<aside>
			<h2>기본 설정</h2>
			<p>데이터를 관리합니다.</p>
			<form class="settings__form">
				<section class="settings__basic">
					<h3>기본 섹션</h3>
					<section>
						<input type="checkbox" id="settings__basic-name-toggle" checked />
						<label for="settings__basic-name-toggle">name</label>
						<input type="checkbox" id="settings__basic-job-toggle" checked />
						<label for="settings__basic-job-toggle">job</label>
						<input type="checkbox" id="settings__basic-email-toggle" checked />
						<label for="settings__basic-email-toggle">email</label>
						<input type="checkbox" id="settings__basic-phone-number-toggle" checked />
						<label for="settings__basic-phone-number-toggle">phone-number</label>
						<input type="checkbox" id="settings__basic-address-toggle" checked />
						<label for="settings__basic-address-toggle">address</label>
						<input type="checkbox" id="settings__basic-cover-letter-toggle" checked />
						<label for="settings__basic-cover-letter-toggle">cover-letter</label>
						<input type="checkbox" id="settings__basic-profile-image-toggle" checked />
						<label for="settings__basic-profile-image-toggle">profile-image</label>
					</section>					
				</section>				
			</form>
		</aside>
	</section>
`;

export default T_settings;
