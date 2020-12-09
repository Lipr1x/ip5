

const site = document.forms[1];

site.addEventListener("submit", function(event) {
  event.preventDefault();
  new FormData(site);
});

site.addEventListener("formdata", event => {
  const data = event.formData;

  const entries = [...data.entries()];

  console.log(entries);

  const values = [...data.values()];

  if(values[1].length < 5){
  	Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'У тебя слишком короткий пароль!'  
	});
  }
  
  else{
  		Swal.fire("Вы зарегистрировались!");

  }

  console.log(values);
});