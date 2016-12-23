//obj = JSON.parse(localStorage.getItem('Rating'));
			//obj = {"Movies":{"Double_Seat":[],"Hit":[],"MI":[],"Manjhi":[],"Phantom":[],"She":[],"Tu_Hi_Re":[],"Welcome_Back":[]}};
			//localStorage.setItem("Rating",JSON.stringify(obj));

			function loadOld()
				{
					var val=0;
					var obj = JSON.parse(localStorage.getItem('Rating'));
					
					var vals = obj.Movies[name];
					document.getElementById('r').innerHTML = "";
					for(index in vals)
						{
							val += parseInt(vals[index]);
							//document.getElementById('r').innerHTML += vals[index]+" ";
						}

					val = parseInt(val/(vals.length));
					if(!isNaN(val))
						{
							document.getElementById('r').innerHTML += 'Rating: <b class="disp_rat">'+val+'</b>/5 from '+vals.length+' user';
							document.getElementById('starRating').innerHTML = val;
						}
					else
						{
							document.getElementById('r').innerHTML += 'Rating: 0/5 <b>Be first to rate this</b>';
							document.getElementById('starRating').innerHTML = 0;
						}
				
				}

			function store(rating)
				{
					var obj = JSON.parse(localStorage.getItem('Rating'));
					obj.Movies[name].push(rating.value);
					localStorage.setItem('Rating',JSON.stringify(obj));
					document.getElementById('star'+rating.value).checked = true;

					loadOld();
				}