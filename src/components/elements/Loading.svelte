<script>
export let is_fullheight;

</script>



<style>

.loading {
	display: block;
	margin: 0 auto;
	text-align: center;
	font-size: 2.75rem;
	color: #bbbbbb;
	margin-bottom: 2rem;
}

.loading i {
	/*font-size: 1.25rem;*/
	/*color: #e6e6e6;*/
	/* ... color+size */
}

.hero:not(.is-fullheight) .hero-body {
	padding-top: 7rem !important;
	padding-bottom: 7rem !important;
}


</style>


<section class="hero" style="border-bottom: none !important;" class:is-fullheight={is_fullheight}>

	<div class="hero-body">

		<div class="container">

			<div class="loading">
				<i class="fas fa-circle-notch fa-spin"></i>
			</div>

		</div>

	</div>

</section>


