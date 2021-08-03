<script>
export let currentRoute;


let promise = getRows(params);

async function getRows(params) {

	const url = `${}/resources/coaches`;

	const resp = await fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const result = await resp.json();

	if (!resp.ok) {
		throw new Error(result)
	}

}

</script>


<style>

</style>

