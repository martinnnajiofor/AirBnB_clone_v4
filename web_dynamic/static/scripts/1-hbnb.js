const amenities_h4 = document.querySelector('#amenities_h4');
const select_amenities = document.querySelector('.select_amenities');
const select_amenities_all = document.querySelectorAll('#li_name');
const new_list = [];

select_amenities.addEventListener("click", function () {
	select_amenities_all.forEach(select_amenity => {
		const li_element = new_list.includes(select_amenity.getAttribute("data-name"));
		if (select_amenity.checked === true && !li_element) {
			new_list.push(select_amenity.getAttribute("data-name"));
		}
		else if (select_amenity.checked === false && li_element) {
			new_list.splice(new_list.indexOf(select_amenity.getAttribute("data-name")), 1);
		}
	});
	new_amenities = new_list.join(', ');
	amenities_h4.innerHTML = new_amenities

})
