$(function () {
    var layerPop = $('#layer-pop'),
        layerMask = $('#layer-mask'),
        layerContent = $('#layer-content'),
        layerClose = $('#layer-close'),
        errorMsg = $('.error-msg'),

        loginBtn = $('#loginSubmitBtn');
    // 点击登录
    $('#loginLink').click(function () {
        // 获取登陆窗代码
        var loginHtml = $('#loginHtml').html();
        showLayer(loginHtml, 500, 300, closeCallback);


        // 表单验证
        $('#loginSubmitBtn').click(function (e) {  // 这里不能使用loginBtn的原因是这部分的dom结构的js创造的
            e.preventDefault()
            var username = $('input[name="text"]').val(),
                password = $('input[name="password"]').val();
            if (username === 'hey' && password === 'guys') {
                alert('登录成功');
            } else  {
                $('.error-msg').html('密码或者账号有误')  // 这里同理不能使用
            }
        })

    })

    // 点击注册
    $('#regeLink').click(function () {
        var regeHtml = $('#regeHtml').html();
        showLayer(regeHtml, 500, 350, closeCallback);

        // 验证
        $('#regeSubmitBtn').click(function () {
            var username =$('input[name="text"]').val(),
                password = $('input[name="password"]').val(),
                repassword = $('input[name="repassword"]').val();

            if (username !== "" && password  !== ""  && repassword === password) {
                alert('注册成功');
            } else {
                $('.error-msg').html('两次密码不一致且账号密码不能为空')
            }
        })
    });


    // 显示
    function showLayer(html, width, height, callback) {
        // 显示遮罩层
        layerMask.show();

        // 显示对话框
        layerPop.show();

        // 设置窗体大小
        layerPop.css({
            width: width,
            height: height
        });

        layerContent.html(html);
        
        layerClose.click(function () {
            hideLayer();
            callback()
        })
    }
    
    // 关闭弹出层
    function hideLayer() {
        layerPop.hide();
        layerMask.hide()
    }

    function closeCallback() {
        errorMsg.html('');
    }



})