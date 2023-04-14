<section class="wrapper">
	<div class="title">Mothers and Daughters</div>
	<div class="subtitle">
		The distinct bonds of an artistic family — biological or otherwise.
	</div>
</section>

<style>
	@media only screen and (max-width: 600px) {
		.wrapper {
			border-top: 1px black dashed;
			padding-top: 25px;
			padding-bottom: 20px;
			padding-left: 10px;
			padding-right: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.title {
			font-family: "FactCondensedBold";
			font-size: 30px;
			text-transform: uppercase;
			text-align: center;
		}
		.subtitle {
			display: none;
		}
	}
	@media only screen and (min-width: 601px) and (max-width: 1200px) {
		.wrapper {
			border-top: 1px black dashed;
			padding-bottom: 25px;
			padding-top: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.title {
			font-family: "FactCondensedBold";
			font-size: 30px;
			text-transform: uppercase;
		}
		.subtitle {
			font-family: "FactMedium";
			font-size: 22px;
			text-align: center;
		}
	}
	@media only screen and (min-width: 1201px) {
		.wrapper {
			border-top: 1px black dashed;
			padding-bottom: 25px;
			padding-top: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.title {
			font-family: "FactCondensedBold";
			font-size: 30px;
			text-transform: uppercase;
		}
		.subtitle {
			font-family: "FactMedium";
			font-size: 24px;
		}
	}

	@font-face {
		font-family: "FactMedium";
		src: url("/Fact Deck-65 Medium.otf") format("opentype");
	}
	@font-face {
		font-family: "FactCondensedBold";
		src: url("/Fact Deck-77 Condensed Bold.otf") format("opentype");
	}
</style>
