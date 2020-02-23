<?php
	switch ($_SERVER["SCRIPT_NAME"]) {
		case "/about/index.php":
			$CURRENT_PAGE = "about"; 
			$PAGE_TITLE = "about radsmth";
			break;
		case "/work/index.php":
			$CURRENT_PAGE = "work"; 
			$PAGE_TITLE = "work";
			break;
		case "/contact/index.php":
			$CURRENT_PAGE = "contact"; 
			$PAGE_TITLE = "contact";
			break;
		default:
			$CURRENT_PAGE = "home";
			$PAGE_TITLE = "graphic design";
	}
?>