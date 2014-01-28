$(document).ready(function() {
    //Change between Projects and Contacts ( but there can be more links)
    $(document).on("click", '.d-header a', function(e) {
        e.preventDefault();
        //hange at first color of links, made bold showed
        $('.d-header a').each(function() {
            if ($(this).hasClass('bolder'))
                $(this).removeClass('bolder').removeClass('dark').addClass('light');
        });
        $(this).removeClass('light').addClass('bolder').addClass('dark');
        //Show block
        $('.delivery-type').each(function() {
            if (!$(this).hasClass('not-show'))
                $(this).addClass('not-show');
        });
        $('#show-' + $(this).attr('id')).removeClass('not-show');
    });
    
    //Show contact by clicking to the button Hire me
    $(document).on("click", '.hire-me', function(e) {
        $('.delivery-type').each(function() {
            if (!$(this).hasClass('not-show'))
                $(this).addClass('not-show');
        });
        if ($('#show-contact').hasClass('not-show'))
            $('#show-contact').removeClass('not-show');
        if ($('#contact').hasClass('light')) {
            $('#contact').removeClass('light').addClass('bolder').addClass('dark');
            $('#projects').removeClass('bolder').removeClass('dark').addClass('light');
        }
    });
    
    //Show project information by clicking
    $(document).on("click", '.company', function(e) {
        if (!$(this).hasClass('choosed')) {
            $('.company').each(function() {
                $(this).removeClass('choosed');
            });
            $(this).addClass('choosed');
            $('.project-link').html($(this).children('.c-name-block').children('.c-name').html());
            $('.project-link').attr('href', 'http://' + $(this).children('.c-name-block').children('.c-name').html());
            $('#show-projects .company-info .time-text').html($(this).children('.company-time').val());
            $('#show-projects .company-info .role-text').html($(this).children('.company-role').val());
            $('#show-projects .company-info .language-text').html($(this).children('.company-language').val());
            $('#show-projects .company-info .website img').attr('src', 'imgages/projects/' + $(this).children('.company-img').val() + '_index.png');
            $('#show-projects .d-info .d-comment i').html($(this).children('.company-desc').val());
        }
    });
    
    //Open links to projects in new windows
    $(document).on("click", 'a.new-window', function(e) {
        e.preventDefault();
        target = $(this).attr('href');
        window.open(target);
        return false;
    });
    
    //Open image of project in modal window
    $(document).on("click", '.website img', function(e) {
        e.preventDefault();
        var c = $('<div class="box-modal big-modal" />');
        var openSubject = $(this).clone();
        c.html(openSubject);
        c.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
        $.arcticmodal({
            content: c
        });
        return false;
    });
});

