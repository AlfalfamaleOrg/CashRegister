<link rel="stylesheet/less" type="text/css" href="LESS/index.less">

<?php
	foreach(new DirectoryIterator('JS/3rdParty') as $file)
		if($file->getExtension() == 'js')
			echo "<script src=\"JS/3rdParty/$file\"></script>";

	foreach(new DirectoryIterator('JS') as $file)
		if($file->getExtension() == 'js')
			echo "<script src=\"JS/$file\"></script>";
?>