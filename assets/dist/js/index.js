$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    unindexed_array.map(val => {
        data[val['name']] = val['value']
    })
    console.log(data)
    var request = {
        "url" : `http://localhost:3000/api/users/${data._id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
        window.location.href = 'http://localhost:3000/get-user';
    })
})

$ondelete = $(".table tbody td a.delete");
$ondelete.click(function(){
    var id = $(this).attr("user-id")
    console.log(id)
    var request = {
        "url" : `http://localhost:3000/api/users/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted Successfully!");
            location.reload();
        })
    }
})