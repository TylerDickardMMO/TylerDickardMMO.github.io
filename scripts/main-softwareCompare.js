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
function initializeInstallTable() {
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
}
function initializeVersionTable() {
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
}
function addInstalled(result) {
    const tdDevice = document.createElement("td");
    const tdDeviceTxt = document.createTextNode("Both");
    tdDevice.appendChild(tdDeviceTxt);

    const tdName = document.createElement("td");
    const tdNameTxt = document.createTextNode(result[0]);
    tdName.appendChild(tdNameTxt);

    const tdVersion = document.createElement("td");
    const tdVersionTxt = document.createTextNode(result[1])
    tdVersion.appendChild(tdVersionTxt);

    const tdPublisher = document.createElement("td");
    const tdPublisherTxt = document.createTextNode(result[2]);
    tdPublisher.appendChild(tdPublisherTxt);

    const tr = document.createElement("tr");
    tr.appendChild(tdDevice);
    tr.appendChild(tdName);
    tr.appendChild(tdVersion);
    tr.appendChild(tdPublisher);

    const tbody = document.getElementById("installedBody");
    tbody.appendChild(tr);

}

function addVersion(result0, result1, devNameNew, devNameOld) {
    console.log(result1);
    const tdDeviceNew = document.createElement("td");
    const tdDeviceTxtNew = document.createTextNode(devNameNew + " (New) ");
    tdDeviceNew.appendChild(tdDeviceTxtNew);

    const tdNameNew = document.createElement("td");
    const tdNameTxtNew = document.createTextNode(result0[0]);
    tdNameNew.appendChild(tdNameTxtNew);

    const tdVersionNew = document.createElement("td");
    const tdVersionTxtNew = document.createTextNode(result0[1])
    tdVersionNew.appendChild(tdVersionTxtNew);

    const tdPublisherNew = document.createElement("td");
    const tdPublisherTxtNew = document.createTextNode(result0[2]);
    tdPublisherNew.appendChild(tdPublisherTxtNew);

    const trNew = document.createElement("tr");
    trNew.appendChild(tdDeviceNew);
    trNew.appendChild(tdNameNew);
    trNew.appendChild(tdVersionNew);
    trNew.appendChild(tdPublisherNew);

    const tdDeviceOld = document.createElement("td");
    const tdDeviceTxtOld = document.createTextNode(devNameOld + " (Old) ");
    tdDeviceOld.appendChild(tdDeviceTxtOld);

    const tdNameOld = document.createElement("td");
    const tdNameTxtOld = document.createTextNode(result1[0]);
    tdNameOld.appendChild(tdNameTxtOld);

    const tdVersionOld = document.createElement("td");
    const tdVersionTxtOld = document.createTextNode(result1[1])
    tdVersionOld.appendChild(tdVersionTxtOld);

    const tdPublisherOld = document.createElement("td");
    const tdPublisherTxtOld = document.createTextNode(result1[2]);
    tdPublisherOld.appendChild(tdPublisherTxtOld);

    const trOld = document.createElement("tr");
    trOld.appendChild(tdDeviceOld);
    trOld.appendChild(tdNameOld);
    trOld.appendChild(tdVersionOld);
    trOld.appendChild(tdPublisherOld);

    const tbody = document.getElementById("versionBody");
    tbody.appendChild(trNew);
    tbody.appendChild(trOld);
}

function addMissing(result) {

}

function findName(temp, tempArray) {
    for(let i = 0; i < tempArray.length; ++i) {
        if(tempArray[i][0] === temp) {
            return i;
        }
    }
    return -1;
}
function findVersion(temp, tempArray) {
    for(let j = 0; j < tempArray.length; ++j) {
        if(tempArray[j][1] === temp) {
            return j;
        }
    }
    return -1;
}
function compareResults(resultsCSV, resultsSQL, newDevName, oldDevName) {
    
    for(let i=0; i < resultsCSV[0].length; i++) {
        if (findName(resultsCSV[0][i][0], resultsSQL) !== -1) {
            if(findVersion(resultsCSV[0][i][1], resultsSQL) !== -1) {
                addInstalled(resultsCSV[0][i]);
            } else {
                console.log(resultsCSV[0][i][0]);
                addVersion(resultsCSV[0][i], resultsSQL[findName(resultsCSV[0][i][0], resultsSQL)], newDevName, oldDevName);
            }
        }
    }
    initializeInstallTable();
    initializeVersionTable();
}