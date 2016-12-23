



//obj = {"comment":{"Double_Seat":{"title":[],"review":[]},"Hit":{"title":[],"review":[]},"MI":{"title":[],"review":[]},"Manjhi":{"title":[],"review":[]},"Phantom":{"title":[],"review":[]},"She":{"title":[],"review":[]},"Tu_Hi_Re":{"title":[],"review":[]},"Welcome_Back":{"title":[],"review":[]}}};
			//localStorage.setItem("comm",JSON.stringify(obj));

	//localStorage.setItem("comment",JSON.stringify(obj));
	
	function display()
	{
	
	
		var i;
				
		var comm="";
		var obj = JSON.parse(localStorage.getItem('comm'));
		for(i=0;i<obj.comment[name].title.length;i++)
		{			
			comm += '<p class="title">'+obj.comment[name].title[i]+"</p>";
			comm += '<p class="content">'+obj.comment[name].review[i]+"</p>";
		}
		
		document.getElementById('reve').innerHTML = comm;	
			
		document.getElementById('review_no').innerHTML = 'Reviews: <b class="disp_rat">'+obj.comment[name].title.length+'</b> users';
	}

	function add()
	{
		if(document.getElementById("title").value == "" || document.getElementById("comment").value == "")
		{
			alert("Please enter your Title and Comment both");
			return;
		}
		var obj = JSON.parse(localStorage.getItem('comm'));
		obj.comment[name].title.push(document.getElementById("title").value);
		obj.comment[name].review.push(document.getElementById("comment").value);
	

		localStorage.setItem('comm',JSON.stringify(obj));
		display();
	}
