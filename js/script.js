$(document).ready(function() {
        //Переключение между доставкой курьером/самовывоз
	$('.d-header a').click(function (e) {
            e.preventDefault();
            $('.d-header a').each(function () {
                if ($(this).hasClass('bolder')) 
                    $(this).removeClass('bolder').removeClass('dark').addClass('light');
            });
            $(this).removeClass('light').addClass('bolder').addClass('dark')
            $('.delivery-type').each(function () {
                if (!$(this).hasClass('not-show')) 
                    $(this).addClass('not-show');
            });
            $('#show-' + $(this).attr('id')).removeClass('not-show');
        });
	
        $('.hire-me').click(function() {
            $('.delivery-type').each(function () {
                if (!$(this).hasClass('not-show')) 
                    $(this).addClass('not-show');
            });
            if ($('#show-contact').hasClass('not-show'))
                $('#show-contact').removeClass('not-show');
            if ($('#contact').hasClass('light')) {
                $('#contact').removeClass('light').addClass('bolder').addClass('dark');
                $('#projects').removeClass('bolder').removeClass('dark').addClass('light');
            }
            
        })
        
        //Кастомные чекбоксы
        $('.checkbox').click(function() {
            if ($(this).hasClass('checked')) {
                $(this).removeClass('checked');
            }
            else $(this).addClass('checked');
        });
        
        //Переключение между пунктами самовывоза
        $('.company').click(function() {
            if (!$(this).hasClass('choosed')) {
                $('.company').each(function() {
                    $(this).removeClass('choosed');
                });
                $(this).addClass('choosed');
                $('.project-link').html( $(this).children('.c-name-block').children('.c-name').html() );
                $('.project-link').attr( 'href', 'http://' + $(this).children('.c-name-block').children('.c-name').html());
                $('#show-projects .company-info .time-text').html( $(this).children('.company-time').val());
                $('#show-projects .company-info .role-text').html( $(this).children('.company-role').val());
                $('#show-projects .company-info .language-text').html( $(this).children('.company-language').val());
                $('#show-projects .company-info .website img').attr('src', 'img/projects/' + $(this).children('.company-img').val() + '_index.png');
                $('#show-projects .d-info .d-comment i').html( $(this).children('.company-desc').val() );
            } 
        });
        
        
        $(document).on("click", 'a.new-window', function(e) {
            e.preventDefault();
            target = $(this).attr('href');
            window.open(target);
            return false;
        });
        
        $(document).on("click", '.website img', function(e) {
             e.preventDefault();
            /*var c = $('<div class="box-modal big-modal" />');
            var openSubject = $(this).clone();
            c.html(openSubject);
            c.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
            $.arcticmodal({
                content: c
            });*/
            $('#exampleModal').arcticmodal();
            return false;
        });
});

