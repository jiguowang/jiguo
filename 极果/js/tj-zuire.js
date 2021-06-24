$(function () {
    $.ajax({
        url: 'http://localhost:3000/report/hot',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            $.each(data, function (i, ele) {
                // 添加li
                if (i < 5) {
                    var li = $('<li></li>')
                    $('.bg_ul').append(li)
                    // 添加图片
                    var im = $('<img>')
                    var str1 = data[i].img
                    var sstr = str1.replace(/http:\/\/192.168.1.13/g, 'http://localhost')
                    im.attr('src', sstr)
                    li.append(im)
                    // 增加图片里面的空白  
                    var p1 = $('<p calss="pp"></p>')                   
                    li.append(p1)
                    //增加图片里面的文字 1
                    var p2 = $('<p class="p2"></p>')            
                    p2.text(data[i].text)
                    p1.append(p2)
                      //增加图片里面的文字 2
                      var p3 = $('<p class="p3"></p>')            
                      p3.text(data[i].uName)
                      p1.append(p3)
                     //增加图片里面的文字 3
                     var p4= $('<p class="p4"></p>')            
                     p4.text(data[i].endTime)
                     p1.append(p4)
                      //增加图片里面的文字 5
                      var p6= $('<p class="p6">3</p>')            
                      p1.append(p6)
                    //增加图片里面的文字 4
                    var p5= $('<p class="p5">3</p>')            
                    p1.append(p5)
                    // 白条
                    var p7= $('<div class="p7">关于格林威特空气净化器还有4篇报告,点击直看</div>')   

                    li.append(p7)

                }
                else {
                    // return false
                }
            }
            )
        }
    })
})