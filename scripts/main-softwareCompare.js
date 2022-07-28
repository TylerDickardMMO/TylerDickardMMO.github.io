var missingTable;
var versionTable;
var installTable;
$(document).ready(function () {
    missingTable = $("#missingSoftwareTable").DataTable ( {
        "columns": [
            {
                "className" : 'select',
                data: "deviceName"
            },
            {
                "className" : 'select',
                data: "softwareName"
            },
            {
                "className" : 'select',
                data: "version"
            },
            {
                "className" : 'select',
                data: "publisher"
            },
        ],
        //
		//This property will load the data for the table in ascending order
		//
		"order" : [[1, 'asc']],
		//
		//This property enables the alt editor library to work as the editor for the data table
		//
		altEditor: true,
		//
		//This property allows the selection of rows in the table
		//
		select: "single",
		scrollX: true
    });
    versionTable = $("#versionConflictsTable").DataTable ( {
        "columns": [
            {
                "className" : 'select',
                data: "deviceName"
            },
            {
                "className" : 'select',
                data: "softwareName"
            },
            {
                "className" : 'select',
                data: "version"
            },
            {
                "className" : 'select',
                data: "publisher"
            },
        ],
        //
		//This property will load the data for the table in ascending order
		//
		"order" : [[1, 'asc']],
		//
		//This property enables the alt editor library to work as the editor for the data table
		//
		altEditor: true,
		//
		//This property allows the selection of rows in the table
		//
		select: "single",
		scrollX: true
    });
    installTable = $("#installedSoftwareTable").DataTable ( {
        "columns": [
            {
                "className" : 'select',
                data: "deviceName"
            },
            {
                "className" : 'select',
                data: "softwareName"
            },
            {
                "className" : 'select',
                data: "version"
            },
            {
                "className" : 'select',
                data: "publisher"
            },
        ],
        //
		//This property will load the data for the table in ascending order
		//
		"order" : [[1, 'asc']],
		//
		//This property enables the alt editor library to work as the editor for the data table
		//
		altEditor: true,
		//
		//This property allows the selection of rows in the table
		//
		select: "single",
		scrollX: true
    });
    //
	//Function Type: On Keystroke
	//Description: As you type in the search bar it will search the tables
	//
	$("#refreshSearch").on("keyup", function() {
		var tables = $('table.dataTable');
		tables.DataTable().search(this.value).draw();
		console.log(tables.DataTable().search(this.value).data());
	});
	//
	//Function Type: On Click
	//Description: When you click on the x in the search box it will reset the filters
	//
	$('input#refreshSearch.form-control').on('keyup click', function() {
		var tables = $('table.dataTable');
		window.setTimeout(function() {
			if(document.getElementById('refreshSearch').value == '') {
				tables.DataTable().search('').draw();
			}
		}, 100);
	});
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
		  event.preventDefault();
		  return false;
		}
	  });
});