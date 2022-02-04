function myFunction()
{
    var fname = document.getElementById('id1').value;
    console.log("my name is "+fname);
    // document.getElementById('ans').innerHTML = fname;

    if(document.getElementById('hm').checked == true) 
    {   
        document.getElementById('ans').innerHTML = fname+" hours = "+ parseInt(fname) * 60+" mins "; 
} 
else {  
    document.getElementById('ans').innerHTML = parseInt(fname) / 60+" hours ="+fname+" minutes ";   
}  


}