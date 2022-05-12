$("#login").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    unindexed_array.map(val => {
        data[val['name']] = val['value']
    })
    var request = {
        "url": `http://localhost:3000/api/login/`,
        "method": "POST",
        "data": data
    }

    $.ajax(request).done(function (response) {
        window.localStorage.setItem('user', JSON.stringify(response))
        window.location.href = 'http://localhost:3000/';
    })
})

$("#update_user").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    unindexed_array.map(val => {
        data[val['name']] = val['value']
    })
    console.log(data)
    var request = {
        "url": `http://localhost:3000/api/users/${data._id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("User Updated Successfully!");
        window.location.href = 'http://localhost:3000/get-users';
    })
})

$ondelete = $(".table tbody td a.user-delete");
$ondelete.click(function () {
    var id = $(this).attr("user-id")
    var request = {
        "url": `http://localhost:3000/api/users/${id}`,
        "method": "DELETE"
    }

    if (confirm("Do you really want to delete this record?")) {
        $.ajax(request).done(function (response) {
            alert("User Deleted Successfully!");
            location.reload();
        })
    }
})