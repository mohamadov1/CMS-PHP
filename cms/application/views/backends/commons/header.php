<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>DroirmarketCms</title>
<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url().'statics/bootstrap/css/bootstrap.min.css'?>" />
<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url().'statics/bootstrap/css/bootstrap-responsive.min.css'?>"/>
<script type="text/javascript" src="<?php echo base_url().'statics/js/jquery.js'?>"></script>
<script type="text/javascript" src="<?php echo base_url().'statics/bootstrap/js/bootstrap.min.js'?>"></script>
<script type="text/javascript" src="<?php echo base_url().'statics/js/jquery_validation/jquery.validate.min.js'?>"></script>
<script type="text/javascript" src="<?php echo base_url().'statics/js/jquery_validation/additional-methods.min.js'?>"></script>
<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url().'statics/css/reset.css'?>"/>
<script type="text/javascript">
$(document).ready(function() {
		//Add Hover effect to menus
		jQuery('ul.nav li.dropdown').hover(function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn();
		}, function() {
			jQuery(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut();
		});
		$('.dropdown-toggle').dropdown();
		$('#article-tab a').click(function(e) {
			e.preventDefault();
			$(this).tab('show');
		})
	})
</script>
