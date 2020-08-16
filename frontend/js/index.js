
    $('#formbutton').click(async()=>{
        var userdata={
          email:document.getElementById('email').value,
          name:document.getElementById('name').value,
          age:document.getElementById('age').value,
               }
     
},
$('#getallusers').click(async()=>{
           var users=JSON.parse(data)
            // console.log(data);
            var html="<div id=\"table\"><table id=\"allusers\"><tr><th>Name</th><th>Roll no</th><th>Age</th><th>Email</th><th>Phonenumber</th></tr>";
            for(let i=0;i<users.length;i++)
            {
              html=html+"<tr><td>"+users[i].email+"</td><td>"+users[i].name+"</td><td>"+users[i].age            }
            html+="</table></div>"
            $("body").append(html)
          
    })
  }))