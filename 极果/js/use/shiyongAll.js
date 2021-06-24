$(function () {
    $.ajax({
        url: 'http://localhost:3000/useing/master',
        type: "GET",
        dataType: 'JSON',

        success: function (data) {
            // console.log(data[0].img);
            var str = '';
            $.each(data, function (index, ele) {
                var newSrc = data[index].img.replace(/192.168.1.13/g, 'localhost')
                // console.log(newSrc);
                // console.log(index);
                if (index < 16) {
                    str += `
                    <div class="lis1">
                        <img src="${newSrc}" alt="">
                         <p class="lis1_p1">${data[index].text}</p>
                         <span>${data[index].totalnum}</span> <span>${data[index].num}台</span>
                         <p class="lis1_p2"><span>${data[index].apply}</span>申请</p>
                         <p class="lis1_p3">剩余时间2天</p>
                         <div class="rigTop">${data[index].info_ty}</div>
                    </div>
                   `
                }
            })
            $('.content_').append(str)
            var $lis1 = $('.lis1')
            for (var i = 0; i < $lis1.length; i++) {
                // console.log($lis1[i]);
                if (i % 4 == 1) {
                    console.log($lis1[i]);
                    $($lis1[i]).find('span').css({
                        color: '#6FC14B',
                        border: '1px solid #6FC14B'
                    })
                    $($lis1[i]).find('.lis1_p3').css({
                        color: '#6FC14B',
                    })
                }
            }

        }
    })
})
