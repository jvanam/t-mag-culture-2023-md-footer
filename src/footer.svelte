<section class="wrapper">
	<a href="https://www.nytimes.com/section/t-magazine">
		<div class="home-link">
			<img src="/handwriting-white.png" />
		</div>
	</a>
	<div class="section-links-wrapper">
		<a href="https://www.nytimes.com/section/t-magazine">
			<div class="section-link s1">
				<div class="title section1">The Artist's Mind</div>
				<div class="subtitle">
					Four writers on what<br />drives, and complicates, creation.
				</div>
			</div>
		</a>
		<a href="https://www.nytimes.com/section/t-magazine">
			<div class="section-link s2">
				<div class="title section2">Mothers & Daughters</div>
				<div class="subtitle">
					The distinct bonds of an artistic family —<br />biological or
					otherwise.
				</div>
			</div>
		</a>
		<a href="https://www.nytimes.com/section/t-magazine">
			<div class="section-link s3">
				<div class="title section3">In Tribute</div>
				<div class="subtitle">
					Five visual artists make portraits for T of<br />the late, great women
					who've inspired them.
				</div>
			</div>
		</a>
		<a href="https://www.nytimes.com/section/t-magazine">
			<div class="section-link s4">
				<div class="title section4">Legends & Heirs</div>
				<div class="subtitle">
					Artistic icons nominate a younger woman<br />whose work resonates
					deeply with them.
				</div>
			</div>
		</a>
	</div>
</section>

<style>
	@media only screen and (max-width: 900px) {
		.section-links-wrapper {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr;
		}
		.home-link,
		.section-links-wrapper {
			width: 100vw;
		}
		.home-link {
			height: 70px;
		}
		.section-link {
			width: 100%;
			height: 80px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			height: 70px;
			width: auto;
		}
		.wrapper {
			width: 100vw;
		}
		.home-link {
			font-family: "FactMedium";
			/* background: linear-gradient(180deg, #b9b9b9 0%, #e2e2e0 100%, #e2e2e0 100%); */
			background-color: #000000;
			position: relative;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			width: auto;
		}

		.section-link .subtitle {
			font-family: "FactCondensedMedium";
			line-height: 1.05;
			font-size: 13px;
		}
		.section-link .title {
			font-size: 18px;
			text-transform: uppercase;
			padding-bottom: 3px;
		}
	}
	@media only screen and (min-width: 901px) and (max-width: 1200px) {
		.section-links-wrapper {
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		.home-link,
		.section-links-wrapper {
			height: 80px;
			width: 100vw;
		}
		.section-link {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			height: 70px;
			width: auto;
		}
		.wrapper {
			width: 100vw;
		}
		.home-link {
			font-family: "FactMedium";
			/* background: linear-gradient(180deg, #b9b9b9 0%, #e2e2e0 100%, #e2e2e0 100%); */
			background-color: #000000;
			position: relative;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			width: auto;
		}

		.section-link .subtitle {
			font-family: "FactCondensedMedium";
			line-height: 1.05;
			font-size: 13px;
		}
		.section-link .title {
			font-size: 18px;
			text-transform: uppercase;
			padding-bottom: 3px;
		}
	}
	@media only screen and (min-width: 1201px) {
		.section-links-wrapper {
			display: grid;
			grid-template-rows: 1fr;
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}
		.home-link,
		.section-links-wrapper {
			height: 90px;
			width: 100vw;
		}
		.section-link {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			height: 90px;
			width: auto;
		}
		.wrapper {
			width: 100vw;
		}
		.home-link {
			font-family: "FactMedium";
			/* background: linear-gradient(180deg, #b9b9b9 0%, #e2e2e0 100%, #e2e2e0 100%); */
			background-color: #000000;
			position: relative;
		}
		.home-link img {
			position: absolute;
			left: 50%;
			top: 5px;
			transform: translateX(-50%);
			width: auto;
		}

		.section-link .subtitle {
			font-family: "FactCondensedMedium";
			line-height: 1.05;
			font-size: 14px;
		}
		.section-link .title {
			font-size: 20px;
			text-transform: uppercase;
			padding-bottom: 3px;
		}
	}
	a {
		text-decoration: none !important;
		color: inherit !important;
	}
	.title.section1 {
		font-family: "FactDisplayExtraboldItalic";
	}
	.title.section2 {
		font-family: "FactDisplayCondensedBold";
	}
	.title.section3 {
		font-family: "KipBoldItalic";
	}
	.title.section4 {
		font-family: "KipBold";
	}
	.s1 {
		background: linear-gradient(360deg, #ffd04b 0%, #ff9a58 100%),
			linear-gradient(360deg, #ffb23e 0%, #ffd364 100%);
	}
	.s2 {
		background: linear-gradient(360deg, #1bc8bd 0%, #c3e16f 100%),
			linear-gradient(360deg, #77ccb6 0%, #9ad88f 100%), #e8f96c;
	}
	.s3 {
		background: linear-gradient(180deg, #abcadd 0%, #ff9acf 100%),
			linear-gradient(360deg, #efc0b5 0%, #ffaaba 100%);
	}
	.s4 {
		background: linear-gradient(360deg, #53b2e8 0%, #a19be8 100%),
			linear-gradient(360deg, #53b2e8 0%, #a19be8 100%);
	}

	@font-face {
		font-family: "FactMedium";
		src: url("/Fact Deck-65 Medium.otf") format("opentype");
	}
	@font-face {
		font-family: "FactCondensedMedium";
		src: url("/Fact Deck-67 Condensed Medium.otf") format("opentype");
	}
	@font-face {
		font-family: "FactCondensedBold";
		src: url("/Fact Deck-77 Condensed Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "FactBold";
		src: url("/Fact Deck-75 Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "FactDisplayExtraboldItalic";
		src: url("/FactDisplay-86ExtraboldItalic.otf") format("opentype");
	}
	@font-face {
		font-family: "FactDisplayCondensedBold";
		src: url("/FactDisplay-77CondensedBold.otf") format("opentype");
	}
	@font-face {
		font-family: "KipBold";
		src: url("/Kippenberger-75 Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "KipBoldItalic";
		src: url("/Kippenberger-76BoldItalic.otf") format("opentype");
	}
</style>
