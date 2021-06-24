$(function () {
    $.ajax({
        url: 'http://localhost:3000/useing/public',
        type: 'GET',
        dataType: 'JSON',

        success: function (data) {
            var str = ''
            $.each(data, function (index, ele) {
                var newsrc = data[index].img.replace(/192.168.1.13/g, 'localhost')
                console.log(newsrc);
                str += `
                <div class="lis1">
                     <img src="${newsrc}" alt="">
                     <p class="lis1_p1">${data[index].text}</p>
                     <span>${data[index].totalnum}</span> <span>${data[index].num}台</span>
                     <p class="lis1_p2"><span>${data[index].apply}</span>申请</p>
                    <p class="lis1_p3">剩余时间2天</p>
                    <div class="rigTop">${data[index].info_ty} </div>
                </div> `
            })
            $('.content_').html(str)
        }
    })

})