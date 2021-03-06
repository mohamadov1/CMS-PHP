<?php
$CI =& get_instance();
;?>
<script type="text/javascript">
jQuery(document).ready(function($) {
	$('#name').focus();
});
</script>
<div class="container-fluid wrapper">
	<div>
		<?php 
		if($CI->session->flashdata('msg_ok')){
			echo '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert">×</button>'.$CI->session->flashdata('msg_ok').'</div>';
		}
		;?>
	</div>
	<form class="form-horizontal" id="form" method="post" enctype="multipart/form-data">
		<fieldset>
			<legend>
				<?php echo lang('msg_add_adver');?>
			</legend>
			<input type="hidden" value="<?php echo $obj[0]->id; ?>" name="id">
			<div class="form-group">
				<label class="control-label col-sm-2" for="txtName"><?php echo lang('msg_position');?></label>
				<div class="controls col-sm-10">
					<select name="position" class="form-control">
						<option value="<?php echo AD_HOME; ?>" 
							<?php
							if($obj[0]->position==AD_HOME){
								echo 'selected="selected"';
							} 
							?>
							><?php echo lang('msg_home') ?></option>
							<option value="<?php echo AD_CAT; ?>" 
								<?php
								if($obj[0]->position==AD_CAT){
									echo 'selected="selected"';
								} 
								?>
								><?php echo lang('msg_categories') ?></option>
								<option value="<?php echo AD_SINGLE_POST; ?>"
									<?php
									if($obj[0]->position==AD_SINGLE_POST){
										echo 'selected="selected"';
									} 
									?>
									><?php echo lang('msg_single_post') ?></option>
								</select>
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-sm-2" for="txtName"><?php echo lang('msg_banner');?>(JPEG,PNG,<5MB)</label>
							<div class="col-sm-10">
								<img src="<?php echo base_url().$obj[0]->path; ?>" width="200" height="100" style="margin-bottom:10px">
								<input type="file" id="banner" name="banner" class="form-control">
							</div>
						</div>

						<div class="form-group">
							<label class="control-label col-sm-2" for="txtName">
								<?php echo lang('msg_status');?>
							</label>
							<div class="controls col-sm-10">
								<select name="state" class="form-control">
									<option value="<?php echo ACTIVATED; ?>" 
										<?php
										if($obj[0]->activated==ACTIVATED){
											echo 'selected="selected"';
										}
										?>
										>
										<?php echo lang('msg_activate') ?>
									</option>
									<option value="<?php echo DEACTIVATED; ?>" 	<?php
									if($obj[0]->activated==DEACTIVATED){
										echo 'selected="selected"';
									}
									?>>
									<?php echo lang('msg_deactivate') ?>
								</option>
							</select>
						</div>
					</div>

					<div class="form-group">
						<div class="col-sm-10 col-sm-offset-2">
							<button type="submit" class="btn btn-primary" >
								<?php echo lang('msg_save');?>
							</button>
							<button type="reset" class="btn"><?php echo lang('msg_reset');?></button>
						</div>
					</div>
				</fieldset>
			</form>
			<!--end form-->
	<!--end container fluid-->