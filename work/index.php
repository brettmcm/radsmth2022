<?php include("../config.php");?>
<!DOCTYPE html>

<html>

<head>
    <?php include("../includes/head-tag-contents.php");?>
</head>

<body>

    <?php include '../components/header.php';?>

    <section class="display" id="work-carousel"></section>

    
    <svg id="prev" class="arrow-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60" height="32" viewBox="0 0 60 32" style="enable-background:new 0 0 60.7 32;" xml:space="preserve"><g transform="translate(0.5 0.5)"><line class="st0" x1="57.1" y1="15.5" x2="2.6" y2="15.5"/><polyline class="st1" points="11.6,24.5 2.6,15.5 11.6,6.5"/></g></svg>
    <svg id="next" class="arrow-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="60" height="32" viewBox="0 0 60 32" style="enable-background:new 0 0 60.7 32;" xml:space="preserve"><g transform="translate(0.5 0.5)"><line class="st0" x1="2.6" y1="15.5" x2="57.1" y2="15.5"/><polyline class="st1" points="48.1,6.5 57.1,15.5 48.1,24.5"/></g></svg>


    <div class="info">
        <span id="project-title-display"></span><br>
        <a id="project-detail-link" class="inverted underline thin" href="" target="_new">More Details<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><title>arrow-top-right</title><g stroke-width="1"><line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="14.5" y1="1.5" x2="1.5" y2="14.5"></line> <polyline fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="7.5,1.5 14.5,1.5 14.5,8.5 "></polyline></g></svg></a>
    </div>


    <?php include '../components/footer.php';?>
    <script src="../lib/js/work-carousel.js"></script>

</body>

</html>