<?php   if(!defined('FLYWETINC')) exit("Request Error!");
/**
 * 模型基类
 */

class Model
{
    var $dsql;
    var $db;
    
    // 析构函数
    function Model()
    {
        global $dsql;
        if ($GLOBALS['cfg_mysql_type'] == 'mysqli')
        {
            $this->dsql = $this->db = isset($dsql)? $dsql : new FlywetSqli(FALSE);
        } else {
            $this->dsql = $this->db = isset($dsql)? $dsql : new FlywetSql(FALSE);
        }
            
    }
    
    // 释放资源
    function __destruct() 
    {
        $this->dsql->Close(TRUE);
    }
}