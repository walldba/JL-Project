function main()
{
  $('.header').hide();
  $('.header').fadeIn(800);
  $('.teste').hide();
  $('.about').on('click', function()
	{
		$('.teste').toggle(); 
        
  })
}

$(document).ready(main);