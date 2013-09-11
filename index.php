<?php
	require_once (dirname(__FILE__) . "/include/common.inc.php");
	
	//require_once FLYWETINC."/include/common.inc.db.php";
	
	require_once FLYWETINC."/arc.partview.class.php";
	
	$GLOBALS['_arclistEnv'] = 'index';
	
	$pageto = $_GET['pageto'];
	
	if(!$pageto){
		$pageto = 'default/index.htm';
	} else {
		$pageto = $pageto . '/index.htm';
	}
	
	//模板
    $templet = MfTemplet($pageto);
    $pv = new PartView();
    $pv->SetTemplet($cfg_basedir . $cfg_templets_dir . "/" . $templet);
    $pv->Display();
    exit();
?>