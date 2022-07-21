<!DOCTYPE html>
<html lang = "en">
	<!--Setting the form as a viewport-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<head>
		<!--Title of the webpage-->
		<title>Build Log Manager</title>
	</head>
	<!-- My Stylesheet-->
	<link rel = "stylesheet" href="styles/styles.css">
	<!-- stylesheets for data tables and its plugins -->
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">
	<link rel="stylesheet" href="styles/dataTables.bootstrap5.min.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.6.2/css/buttons.dataTables.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/select/1.3.1/css/select.dataTables.css" />
	<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.2.5/css/responsive.dataTables.css" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
	<!--Main contents of a page-->
	<body id="body">
		<!--Nav Bar, provided by Bootstrap.com-->
		<nav class="navbar bg-light fixed-top">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" style="float: right">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasNavbarLabel">Table Navigation</h5>
						<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
					</div>
					<div class="offcanvas-body">
						<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#activeRefreshes">Active Refresh Table</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="#deployedRefreshes">Deployed Refresh Table</a>
							</li>
						<form class="d-flex" role="search">
						  <input class="form-control" type="search" placeholder="Search" aria-label="Search" id="refreshSearch">
						  <button class="btn btn-outline-success" type="button" data-bs-dismiss="offcanvas">Search</button>
						</form>
					</div>
				</div>
			</div>
		</nav>
		<!--The section for the active refreshes-->
		<section id="activeRefreshes">
			<!--The Add, Edit, and Delete buttons-->
			<button class="btn btn-primary" id="activeAddbutton" title="Add" type="button">Add</button>
			<button id="activeEditButton" type="button" disabled class="btn btn-primary">Edit</button>
			<button id="activeDeleteButton" type="button" disabled class="btn btn-primary">Delete</button>
			<button id="activeTransferButton" type="button" disabled class="btn btn-primary">Transfer To Deployed</button>
			<!--The table for active refreshes-->
			<table id="activeRefreshesTable" class="dataTable table-striped">
				<thead>
					<tr>
						<!--Table Headders-->
						<th>Ticket Number</th>
						<th>CSA</th>
						<th>Date Accepted</th>
						<th>End User</th>
						<th>User ID</th>
						<th>Stage</th>
						<th>User Email</th>
						<th>CSA Email</th>
						<th>Old Asset Tag</th>
						<th>New Asset Tag</th>
						<th>Old Device Name</th>
						<th>New Device Name</th>
						<th>Manager Name</th>
						<th>Manager Email</th>
						<th>Mail Zone</th>
						<th>Label</th>
						<th>New Return Label</th>
					</tr>
				</thead>
			</table>
		</section>
		<!--Section for deployed refreshes-->
		<section id="deployedRefreshes">
			<!--The Add, Edit, and Delete buttons-->
			<button class="btn btn-primary" id="deployedAddButton" title="Add" type="button">Add</button>
			<button id="deployedEditButton" type="button" disabled class="btn btn-primary">Edit</button>
			<button id="deployedDeleteButton" type="button" disabled class="btn btn-primary">Delete</button>
			<button id="deployedTransferButton" type="button" disabled class="btn btn-primary">Transfer To Active</button>
			<!--The table for the deployed refreshes-->
			<table id="deployedRefreshesTable" class="dataTable table-striped">
				<thead>
					<tr>
						<!--Table Headders-->
						<th>Ticket Number</th>
						<th>CSA</th>
						<th>Date Accepted</th>
						<th>End User</th>
						<th>User ID</th>
						<th>Stage</th>
						<th>User Email</th>
						<th>CSA Email</th>
						<th>Old Asset Tag</th>
						<th>New Asset Tag</th>
						<th>Old Device Name</th>
						<th>New Device Name</th>
						<th>Manager Name</th>
						<th>Manager Email</th>
						<th>Mail Zone</th>
						<th>Label</th>
						<th>New Return Label</th>
					</tr>
				</thead>
			</table>
		</section>
	</body>
	<!-- jQuery addon-->
	<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.slim.min.js"></script>
	<!--Scripts for data tables and its plugins-->
	<script src="https://code.jquery.com/jquery-migrate-3.4.0.js"></script>
	<script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js" ></script>
	<script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
	<script src="https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.js" ></script>
	<script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.js" ></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.js" ></script>
	<script src="https://cdn.datatables.net/responsive/2.2.5/js/dataTables.responsive.js" ></script>
	<script src ="scripts/dataTables.altEditor.free.js"></script>
	<script src="https://cdn.datatables.net/datetime/1.1.2/js/dataTables.dateTime.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.js" ></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
	<!-- Table initialization and features file-->
	<script type="text/javascript" src="scripts/main.js"></script>
	<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-light">
		<div class="col-md-4 d-flex align-items-center">
			<span class="mb-3 mb-md-0 text-muted">© 2022, Medical Mutual - All Rights Reserved</span>
		</div>
	</footer>
</html>
