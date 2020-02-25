<title>radsmth | <?php print $PAGE_TITLE;?></title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<?php if ($CURRENT_PAGE == "home") { ?>
    <meta name="description" content="" />
    <meta name="keywords" content="" /> 
    
    <link rel="stylesheet" href="lib/css/app.css">
    <link rel="stylesheet" href="lib/css/pages/home.css">
<?php } ?>

<?php if ($CURRENT_PAGE == "about") { ?>
    <meta name="description" content="" />
    <meta name="keywords" content="" /> 
    
    <link rel="stylesheet" href="../lib/css/app.css">
    <link rel="stylesheet" href="lib/css/pages/about.css">
<?php } ?>

<?php if ($CURRENT_PAGE == "work") { ?>
    <meta name="description" content="" />
    <meta name="keywords" content="" /> 
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.green.min.css">

    <link rel="stylesheet" href="../lib/css/app.css">
    <link rel="stylesheet" href="lib/css/pages/work.css">
<?php } ?>

<?php if ($CURRENT_PAGE == "contact") { ?>
    <meta name="description" content="" />
    <meta name="keywords" content="" /> 
    
    <link rel="stylesheet" href="../lib/css/app.css">
<?php } ?>