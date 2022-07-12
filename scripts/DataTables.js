
var stageOptions = ["Stage 1 - Imaging", "Stage 2 - Running USMT", "Stage 3 - Software Inventory", "Stage 4 - Installing Software from SCCM", "Stage 5 - Manual Install", "Stage 6 - Testing", "Stage 7 - User Testing", "Stage 8 - Deployed", "Stage 11 - Canceled" ];
function sessionDataLabel(d) {
	window.localStorage.setItem('date', d.dateAccepted);
	window.localStorage.setItem('newAsstTag', d.newAsstTag);
	window.localStorage.setItem('userName', d.endUser);
	window.localStorage.setItem('userID', d.userID);
	window.localStorage.setItem('newDeviceName', d.newModelNumber);
	window.localStorage.setItem('oldDeviceName', d.oldModelNumber);
	window.localStorage.setItem('oldAsstTag', d.oldAsstTag);
	window.localStorage.setItem('stage', d.stage);
	window.localStorage.setItem('csa', d.csa);
	window.localStorage.setItem('email', d.userEmail);
	window.localStorage.setItem('ticketNumber', d.ticketNumber);
}
function sessionDataReturnLabel(d) {
	window.localStorage.setItem('oldAsstTag', d.oldAsstTag);
	window.localStorage.setItem('oldDeviceName', d.oldModelNumber);
	window.localStorage.setItem('csa', d.csa);
	window.localStorage.setItem('mail',d.mailZone);
}
$(document).ready( function () {
	//Creating the dataSet that will be displayed on the table
	var activeDataSet = [
		{ticketNumber:12345, csa:"Tyler Dickard", dateAccepted:"6/20/2022", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 1 - Imaging", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"04-4P-4041",},
		{ticketNumber:122245, csa:"James Hawk", dateAccepted:"7/1/2022", endUser:"Tyler Dickard", userID:"td3220", stage: "Stage 3 - Software Inventory", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"James.Hawk@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"04-4P-4041"},
		
	];
	
	var deployedDataSet = [
		{ticketNumber:10000, csa:"Tyler Dickard", dateAccepted:"2021-5-20", endUser:"Tyler Dickard", userID:"td3220", stage:"Stage 8 - Deployed", userEmail:"Tyler.Dickard@medmutual.com", csaEmail:"Tyler.Dickard@medmutual.com", oldAsstTag:"10474097", newAsstTag:"10474097", oldModelNumber:"L428M3J3", newModelNumber:"L428M3J3", managerName:"Clinton Hayman", managerEmail:"Clinton.Hayman@medmutual.com", mailZone:"04-4P-4041"},
	];
    var activeTable = $('#activeRefreshesTable').DataTable( {
		//load the data
		"data": activeDataSet,
		//create the columns
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
				"data": "dateAccepted",
				datetimepicker: { timepicker: false, format : "m/d/Y"}
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
				"data": "stage",
				type: "select",
				select2 : { width: "100%"},
				options: stageOptions,
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
			},
			{
				"className": 'select',
				data: null,
				render: function (data, type, row, meta) {
				  return '<a class="activeLabelButton" id="labelButton">View Label</a>';
				},
				readonly: true
			},
			{
				"className": 'select',
				data: null,
				render: function (data, type, row, meta) {
				  return '<a class="activeReturnLabelButton" id="newButton">View New Return Label</a>';
				},
				readonly: true
			}
		],
		//making sure the tickets are inorder
		"order" : [[1, 'asc']],
		//used for the select library by making the table response
		responsive: true,
		//Enabled alt editor
		altEditor: true,
		//automatically changes the width
		autoWitdh: true,
		//makes it so the table is scrollable on the horizontal axis
		scrollX: true,
		//this singular line has cost me 5 hours of debugging, thank you random german person for writing a comment on stack
		//overflow 2 years ago which fixes the issue
		select: "single"
	});
	//When a row is selected it will highlight it
	$('#activeRefreshesTable tbody').on('click', 'td.select', function () {
		var tr = $(this).closest('tr');
		var editBtn = document.getElementById('activeEditButton');
		var deleteBtn = document.getElementById('activeDeleteButton');
		var lblBtn = document.getElementById('activeLabelButton');
        if (tr.hasClass('selected')) {
            tr.removeClass('selected');
			editBtn.disabled = true;
			deleteBtn.disabled = true;
        } else {
            activeTable.$('tr.selected').removeClass('selected');
            tr.addClass('selected');
			editBtn.disabled = false;
			deleteBtn.disabled = false;
        }
    });
	//add button
	$('#activeAddbutton').on('click', function () {
		var that = $( '#activeRefreshesTable' )[0].altEditor;
		that._openAddModal();
		$('#altEditor-add-form-' + that.random_id)
			.off('submit')
			.on('submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				that._addRowData();
			});
	});
  //delete button
	$('#activeDeleteButton').on('click', function (x) {  
		var that = $( '#activeRefreshesTable')[0].altEditor;
		that._openDeleteModal();
		$('#altEditor-delete-form-' + that.random_id)
			.off('submit')
			.on('submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				that._deleteRow();
			});
		x.stopPropagation(); //avoid open "Edit" dialog
	});
  //edit
	$('#activeEditButton').on('click', function () {
		var that = $( '#activeRefreshesTable' )[0].altEditor;
		that._openEditModal();
		$('#altEditor-edit-form-' + that.random_id)
			.off('submit')
			.on('submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				that._editRowData();
			});
	});
	//Label link
	$(document).on('click', "[id^='activeRefreshesTable'] .activeLabelButton", 'tr', function (x) {
		sessionDataLabel(activeTable.row('.selected').data());
		window.open("HTMLTemplates/label.html", "_blank");
	});
	//New Return Label Link
	$(document).on('click', "[id^='activeRefreshesTable'] .activeReturnLabelButton", 'tr', function (x) {
		sessionDataReturnLabel(activeTable.row('.selected').data());
		window.open("HTMLTemplates/newReturnLabel.html", "_blank");
	});
	//Deployed Table Initialization
	var deployedTable = $('#deployedRefreshesTable').DataTable( {
		//load the data
		"data": deployedDataSet,
		//create the columns
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
				"data": "stage",
				type: "select",
				options:  [
					"Stage 1 - Imaging",
					"Stage 2 - Running USMT",
					"Stage 3 - Software Inventory",
					"Stage 1 - Imaging",
					"Stage 1 - Imaging",
					"Stage 1 - Imaging",
					"Stage 1 - Imaging",
					"Stage 8 - Deployed",
					"Stage 11 - Canceled",
				]
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
		//making sure the tickets are inorder
		"order" : [[1, 'asc']],
		//used for the select library by making the table response
		responsive: true,
		//Enabled alt editor
		altEditor: true,
		//automatically changes the width
		autoWitdh: true,
		//makes it so the table is scrollable on the horizontal axis
		scrollX: true,
		//this singular line has cost me 5 hours of debugging, thank you random german person for writing a comment on stack
		//overflow 2 years ago which fixes the issue
		select: "multiple"
	});
	//When a row is selected it will highlight it
	$('#deployedRefreshesTable tbody').on('click', 'td.select', function () {
		var tr = $(this).closest('tr');
		var editBtn = document.getElementById('deployedEditButton');
		var deleteBtn = document.getElementById('deployedDeleteButton');
        if (tr.hasClass('selected')) {
            tr.removeClass('selected');
			editBtn.disabled = true;
			deleteBtn.disabled = true;
        } else {
            deployedTable.$('tr.selected').removeClass('selected');
            tr.addClass('selected');
			editBtn.disabled = false;
			deleteBtn.disabled = false;
        }
    });
	//add button
	$('#deployedAddButton').on('click', function () {
		var that = $( '#deployedRefreshesTable' )[0].altEditor;
		that._openAddModal();
		$('#altEditor-add-form-' + that.random_id)
			.off('submit')
			.on('submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				that._addRowData();
			});
	});
  //delete button
	$('#deployedDeleteButton').on('click', function (x) {  
		var that = $( '#deployedRefreshesTable')[0].altEditor;
		that._openDeleteModal();
		$('#altEditor-delete-form-' + that.random_id)
			.off('submit')
			.on('submit', function (e) {
				e.preventDefault();
				e.stopPropagation();
				that._deleteRow();
			});
		x.stopPropagation(); //avoid open "Edit" dialog
	});
  //edit
	$('#deployedEditButton').on('click', function () {
		var that = $( '#deployedRefreshesTable' )[0].altEditor;
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
