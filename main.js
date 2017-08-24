function main()
{
  $('.header').hide();
  $('.header').fadeIn(800);
  $('.descricao').hide();
  $('.about').on('click', function()
	{
		$(this).next('.descricao').slideToggle(400); 
		if ($(this).text() == 'Saiba mais v')
			{
				$(0).text('Saiba mais ^');		
			}
		else
			{
				$(this).text('Saiba mais v');	
			}			
  })
}

$(document).ready(main);
