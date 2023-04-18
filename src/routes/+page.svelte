<script>
	import Header from "../header.svelte";
	import Footer from "../footer.svelte";
</script>

<section class="wrapper">
	<Footer />
	<Header />
	<!-- Not using an each block here since the styling is specific to each row  -->
	<!-- and there are only 7 groups  -->

	<!-- HIAM ABBASS -->
	<div class="m-d-footer-row first">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/hiam-abbass-succession-daughters.html"
			class="text-wrapper wrapper-abbass"
		>
			<span class="newline">
				<span class="name">How a 'Succession' Actress's Daughters</span>
			</span>
			<span class="newline indent-abbass">
				<span class="name">Joined the Family Business</span>
			</span>
		</a>
		<img
			alt="Hiam Abbass, Lina Soualem, and Mouna Soualem"
			class="image-abbass"
			src="/Hiam Abbass _ Lina and Mouna Soualem.jpg"
		/>
	</div>
	<!-- IRENE NEUWIRTH -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/irene-neuwirth-geraldine-jewelry.html"
			class="text-wrapper wrapper-neuwirth"
		>
			<span class="newline">
				<span class="name">Geraldine and Irene Neuwirth are Still Learning</span
				>
			</span>
			<span class="newline indent-neuwirth">
				<span class="name">From Each Others' Crafts</span>
			</span>
		</a>
		<img
			alt="Geraldine and Irene Neuwirth"
			class="image-neuwirth"
			src="/Geraldine Neuwirth _ Irene Neuwirth.jpg"
		/>
	</div>
	<!-- IMOGEN BINNIE -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/imogen-binnie-sybil-lamb.html"
			class="text-wrapper wrapper-binnie"
		>
			<span class="newline indent-binnie">
				<span class="name">The Artist Who Helped Imogen Binnie</span>
			</span>
			<span class="newline">
				<span class="name">Develop Her Own Creative Identity</span>
			</span>
		</a>
		<img
			alt="Imogen Binnie and Sybil Lamb"
			class="image-binnie"
			src="/Imogen Binnie _ Sybil Lamb.jpg"
		/>
	</div>
	<!-- LYNN NOTTAGE -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/lynn-nottage-ruby-aiyo-gerber.html"
			class="text-wrapper wrapper-nottage"
		>
			<span class="newline indent-nottage">
				<span class="name">How Lynn Nottage and Her Daughter </span>
			</span>
			<span class="newline">
				<span class="name">Are Exploring Their Relationship in Writing</span>
			</span>
		</a>
		<img
			alt="Lynn Nottage and Ruby Aiyo Gerber"
			class="image-nottage"
			src="/Lynn Nottage _ Ruby Aiyo Gerber.jpg"
		/>
	</div>
	<!-- LAURA DERN -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/laura-dern-diane-ladd.html"
			class="text-wrapper wrapper-dern"
		>
			<span class="newline">
				<span class="name">What Laura Dern and Diane Ladd</span>
			</span>
			<span class="newline indent-dern">
				<span class="name">Have Learned From Each Other</span>
			</span>
		</a>
		<img
			alt="Diane Ladd and Laura Dern"
			class="image-dern"
			src="/Diane Ladd _ Laura Dern.jpg"
		/>
	</div>
	<!-- JAMIE NARES -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/jamie-nares-daughters.html"
			class="text-wrapper wrapper-nares"
		>
			<span class="newline">
				<span class="name">Jamie Nares's Message to Her Daughters </span>
			</span>
			<span class="newline indent-nares">
				<span class="name">Was Simple: 'Go for It'</span>
			</span>
		</a>
		<img
			alt="Jamie, Zarina, and Jahanara Nares"
			class="image-nares"
			src="/Jamie Nares _ Zarina and Jahanara.jpg"
		/>
	</div>
	<!-- LENA DUNHAM -->
	<div class="m-d-footer-row">
		<a
			href="https://www.nytimes.com/2023/04/20/t-magazine/lena-dunham-laurie-simmons.html"
			class="text-wrapper wrapper-dunham"
		>
			<span class="newline indent-dunham">
				<span class="name">Laurie Simmons and Lena Dunham </span>
			</span>
			<span class="newline">
				<span class="name">Argue About Earrings, Not Art</span>
			</span>
		</a>
		<img
			alt="Lena Dunham and Laurie Simmons"
			class="image-dunham"
			src="/Laurie Simmons _ Lena Dunham.jpg"
		/>
	</div>
</section>

<style>
	/* SMALL */
	@media only screen and (max-width: 600px) {
		.m-d-footer-row {
			width: 100vw;
			height: fit-content;
			border-top: 1px black dashed;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			position: relative;
		}
		.m-d-footer-row.first {
			border-top: none;
		}
		.newline {
			display: inline-block;
		}
		.title {
			font-family: "KipRegular";
			line-height: 1;
		}
		.name {
			font-family: "FactMedium";
		}
		.text-wrapper {
			display: block;
			width: 100%;
			padding-top: 15px;
			padding-bottom: 15px;
			padding-left: 20px;
			padding-right: 20px;
			position: static;
			text-align: center;
		}
		.text-wrapper + img {
			display: none;
		}
		.title,
		.name {
			text-align: center;
		}
		.title {
			font-size: 13px;
		}
		.name {
			font-size: 17px;
		}
	}
	/* MEDIUM */
	@media only screen and (min-width: 601px) and (max-width: 1200px) {
		.m-d-footer-row {
			width: 100vw;
			height: 90px;
			border-top: 1px black dashed;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			align-items: center;
			position: relative;
		}
		.m-d-footer-row.first {
			border-top: none;
		}
		.newline {
			display: block;
			overflow: hidden;
			position: relative;
			width: fit-content;
		}
		.newline::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: #4cc26c;
			opacity: 0;
			transition: opacity 300ms, transform 300ms;
			transform: translate3d(-100%, 0, 0);
		}

		.text-wrapper:hover > .newline::after,
		.text-wrapper:focus > .newline::after {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
		.newline > span {
			display: inline-block;
			width: fit-content;
		}
		.title {
			font-family: "KipRegular";
		}
		.name {
			font-family: "FactMedium";
		}
		.text-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: fit-content;
			padding: 20px;
			text-align: center;
		}
		.text-wrapper + img {
			display: block;
			opacity: 0%;
			position: absolute;
			z-index: 50;
			transition: opacity 0.2s linear;
			pointer-events: none;
		}
		.text-wrapper:hover + img {
			opacity: 100%;
		}
		.title,
		.name {
			text-align: center;
		}
		.title {
			font-size: 14px;
		}
		.name {
			font-size: 21px;
		}
		.image-abbass {
			width: 400px;
			height: auto;
			top: 100px;
			left: 20vw;
			transform: rotate(2deg);
		}
		.image-neuwirth {
			width: 450px;
			height: auto;
			top: 100px;
			left: 20vw;
			transform: rotate(-3.79deg);
		}
		.image-binnie {
			width: 300px;
			height: auto;
			top: 100px;
			left: 20%;
			transform: rotate(3.08deg);
		}
		.image-nottage {
			width: 400px;
			height: auto;
			bottom: 100px;
			left: 5%;
			transform: rotate(-3.53deg);
		}
		.image-dern {
			width: 500px;
			height: auto;
			bottom: 100px;
			left: 15vw;
			transform: rotate(3.52deg);
		}
		.image-nares {
			width: 400px;
			height: auto;
			bottom: 100px;
			left: 5vw;
			transform: rotate(-3.53deg);
		}
		.image-dunham {
			width: 400px;
			height: auto;
			bottom: 100px;
			left: 40vw;
			transform: rotate(3.08deg);
		}
	}
	/* LARGE */
	@media only screen and (min-width: 1201px) {
		.m-d-footer-row {
			width: 100vw;
			height: 90px;
			border-top: 1px black dashed;
			display: flex;
			flex-direction: column;
			justify-content: space-evenly;
			position: relative;
		}
		.m-d-footer-row.first {
			border-top: none;
		}
		.newline {
			display: block;
			text-decoration: none;
			overflow: hidden;
			position: relative;
			width: fit-content;
		}
		.newline::after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 3px;
			background-color: #4cc26c;
			opacity: 0;
			transition: opacity 300ms, transform 300ms;
			transform: translate3d(-100%, 0, 0);
		}
		.text-wrapper:hover > .newline::after,
		.text-wrapper:focus > .newline::after {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
		.newline > span {
			display: inline-block;
		}
		.title {
			font-size: 14px;
		}
		.name {
			font-size: 21px;
		}
		.title,
		.name {
			line-height: 1.4;
		}
		.text-wrapper {
			display: block;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		.text-wrapper + img {
			display: block;
			opacity: 0%;
			position: absolute;
			z-index: 50;
			transition: opacity 0.2s linear;
			pointer-events: none;
		}
		.text-wrapper:hover + img {
			opacity: 100%;
		}
		.wrapper-abbass {
			left: 30px;
		}
		.indent-abbass {
			margin-left: 200px;
		}
		.image-abbass {
			width: 400px;
			height: auto;
			top: 100px;
			left: 20vw;
			transform: rotate(2deg);
		}
		.wrapper-neuwirth {
			right: 150px;
			text-align: end;
		}
		.indent-neuwirth {
			margin-left: 270px;
		}
		.image-neuwirth {
			width: 500px;
			height: auto;
			top: 100px;
			left: 20vw;
			transform: rotate(-3.79deg);
		}
		.wrapper-binnie {
			left: 25%;
		}
		.indent-binnie {
			margin-left: 120px;
		}
		.image-binnie {
			width: 400px;
			height: auto;
			top: -150px;
			left: 65vw;
			transform: rotate(3.08deg);
		}
		.wrapper-nottage {
			right: 200px;
			text-align: end;
		}
		.indent-nottage {
			margin-left: 150px;
		}
		.image-nottage {
			width: 500px;
			height: auto;
			bottom: -100px;
			left: 5%;
			transform: rotate(-3.53deg);
		}
		.wrapper-dern {
			left: 150px;
		}
		.indent-dern {
			margin-left: 115px;
		}
		.image-dern {
			width: 600px;
			height: auto;
			bottom: -50px;
			left: 45vw;
			transform: rotate(3.52deg);
		}
		.wrapper-nares {
			right: 70px;
			text-align: end;
		}
		.indent-nares {
			margin-left: 60px;
		}
		.image-nares {
			width: 400px;
			height: auto;
			bottom: 100px;
			left: 5vw;
			transform: rotate(-3.53deg);
		}
		.wrapper-dunham {
			left: 70px;
		}
		.indent-dunham {
			margin-left: 100px;
		}
		.image-dunham {
			width: 400px;
			height: auto;
			bottom: 100px;
			left: 40vw;
			transform: rotate(3.08deg);
		}
	}
	/* ALL SCREEN SIZES / GLOBAL */
	:global(*) {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
	}
	:global(body) {
		padding: 0px !important;
		margin: 0px !important;
	}
	.wrapper {
		background-color: #eeeeee;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.title {
		font-family: "KipRegular";
	}
	.name {
		font-family: "FactBold";
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
		font-family: "FactBold";
		src: url("/Fact Deck-75 Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "FactCondensedBold";
		src: url("/Fact Deck-77 Condensed Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "KipRegular";
		src: url("/Kippenberger-55 Regular.otf") format("opentype");
	}
	@font-face {
		font-family: "KipCondensedRegular";
		src: url("/Kippenberger-57 Condensed Regular.otf") format("opentype");
	}
	@font-face {
		font-family: "KipBold";
		src: url("/Kippenberger-75 Bold.otf") format("opentype");
	}
	@font-face {
		font-family: "KipCondensedBold";
		src: url("/Kippenberger-77 Condensed Bold.otf") format("opentype");
	}
</style>
