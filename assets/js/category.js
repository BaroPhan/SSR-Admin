
$("#update_category").submit(function (event) {
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    unindexed_array.map(val => {
        data[val['name']] = val['value']
    })
    console.log(data)

    var request = {
        "url": `http://localhost:3000/api/categories/${data._id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function (response) {
        alert("Category Updated Successfully!");
        window.location.href = 'http://localhost:3000/get-categories';
    })
})

$ondelete = $(".table tbody td a.category-delete");
$ondelete.click(function () {
    var id = $(this).attr("category-id")
    var request = {
        "url": `http://localhost:3000/api/categories/${id}`,
        "method": "DELETE"
    }

    if (confirm("Do you really want to delete this record?")) {
        $.ajax(request).done(function (response) {
            alert("Category Deleted Successfully!");
            location.reload();
        })
    }
})