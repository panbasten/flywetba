<?php
// ------------------------------------------------------------------------
//引入数据库类，支持mysqli和mysql两种数据库
if ($GLOBALS['cfg_mysql_type'] == 'mysqli' && function_exists("mysqli_init"))
{
    require_once(FLYWETINC.'/flywetsqli.class.php');
} else {
    require_once(FLYWETINC.'/flywetsql.class.php');
}

?>