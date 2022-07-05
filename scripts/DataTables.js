//TO DO for the next time I look at this
//2- fix editor
//3- implement add and delete buttons
//4- copy and paste for deployed and archived tables
//5- generate sample files for demo
//6- link those files in a child row


$(document).ready( function () {
	var dataSet = [
		{ticketNumber:12345, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12346, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12347, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12348, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12349, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12350, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12351, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12352, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12353, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12354, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12355, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12356, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		{ticketNumber:12357, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"02-3B-2034"},
		
	];
    var table = $('#activeRefreshesTable').DataTable( {
		"data": dataSet,
		"columns": [
			{ 
				"className": 'select',
				"data": "ticketNumber"
			},
			{ 
				"className": 'select',
				"data": "csa" 
			},
			{ 
				"className": 'select',
				type: "date",
				"data": "dateAccepted"
			},
			{ 
				"className": 'select',
				"data": "endUser"
			},
			{
				"className": 'select',
				"data": "userID"
			},
			{
				"className": 'select',
				"data": "stage"
			},
			{
				"className": 'select',
				"data": "userEmail"
			},
			{
				"className": 'select',
				"data": "csaEmail"
			},
			{
				"className": 'select',
				"data": "oldAsstTag"
			},
			{
				"className": 'select',
				"data": "newAsstTag"
			},
			{
				"className": 'select',
				"data": "oldModelNumber"
			},
			{
				"className": 'select',
				"data": "newModelNumber"
			},
			{
				"className": 'select',
				"data": "managerName"
			},
			{
				"className": 'select',
				"data": "managerEmail"
			},
			{
				"className": 'select',
				"data": "mailZone"
			}
		],
		"order" : [[1, 'asc']],
		responsive: true,
		altEditor: true,
		autoWitdh: true,
		scrollX: true,
	});
	$('#activeRefreshesTable tbody').on('click', 'td.select', function () {
		var tr = $(this).closest('tr');
		var editBtn = document.getElementById('activeEditButton');
		var deleteBtn = document.getElementById('activeDeleteButton');
        if (tr.hasClass('selected')) {
            tr.removeClass('selected');
			editBtn.disabled = true;
			deleteBtn.disabled = true;
        } else {
            table.$('tr.selected').removeClass('selected');
            tr.addClass('selected');
			editBtn.disabled = false;
			deleteBtn.disabled = false;
        }
    });
	$(document).on('click', "[id^='activeRefreshesTable'] tbody ", 'tr', function () {
    var tableID = $(this).closest('table').attr('id');    // id of the table
    var that = $( '#'+tableID )[0].altEditor;
    that._openEditModal();
    $('#altEditor-edit-form-' + that.random_id)
                .off('submit')
                .on('submit', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._editRowData();
                });
  });
});
