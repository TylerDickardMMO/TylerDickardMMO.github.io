SELECT 
	SYS.Name0 AS Name,
	InstallSoftware.ProductName0 AS ProductName,
	InstallSoftware.ProductVersion0 AS ProductVersion
FROM
	v_R_System AS SYS

JOIN v_GS_INSTALLED_SOFTWARE InstallSoftware ON InstallSoftware.ResourceID = SYS.ResourceID