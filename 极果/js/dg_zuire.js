$(function(){

$.ajax({
    url:'http://localhost:3000/guid/hot',
    type:'GET',
    dataType:'JSON',
    success:function(data){
        $.each(data, function(i, ele) {
            // 添加li
            var li=$('<li></li>')    
            $('.dg_ul').append(li)
            // 添加图片 
              var im=$('<img>')
              var str1=data[i].img
              var sstr=str1.replace(/http:\/\/192.168.1.64/g,'http://localhost')
              im.attr('src',sstr)
              li.append(im)
              im.css({
                width:220,
                height:130,
                borderRadius: 10
              })
            //   添加文字
            var span1=$('<span class="span1"><span>')
             span1.text(ele.text)
             li.append(span1)
               // 添加信息
            var p_xi=$('<p class="p_xi" >'+data[i].words+'<p>')
            li.append(p_xi)
                // 添加心
            var p_xin=$('<p class="p_xin" >'+data[i].like+'<p>')
            li.append(p_xin)          
            })         
    }
})
// $('nav').find('a').hover(function(){
//     $(this).addClass('jk').siblings().removeClass('jk')
//     $(this).addClass('jk').siblings().removeClass('dg_first')
// })

})