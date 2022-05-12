
$("#update_product").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    unindexed_array.map(val => {
        data[val['name']] = val['value']
    })
    data.categories = data.categories.split(',')
    data.size = data.size.split(',')
    data.color = data.color.split(',')
    console.log(data)

    var request = {
        "url" : `http://localhost:3000/api/products/${data._id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Product Updated Successfully!");
        window.location.href = 'http://localhost:3000/get-products';
    })
})

$ondelete = $(".table tbody td a.product-delete");
$ondelete.click(function(){
    var id = $(this).attr("product-id")
    var request = {
        "url" : `http://localhost:3000/api/products/${id}`,
        "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Product Deleted Successfully!");
            location.reload();
        })
    }
})