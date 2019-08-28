$(function() {
	"use strict";

	var db;

	function initDB() {
		db = new PouchDB("hmovies");
		// console.log(db);
		return db;
	}

	initDB();

	var splashScreen = setTimeout(showHome, 5000);
	function showHome() {
		clearTimeout(splashScreen);
		$.mobile.navigate("#home");
	}

	var $elFormMovie = $("#formMovie"),
		$elBtnReset = $("#btnReset"),
		$elBtnSave = $("#btnSave"),
		$elBtnShow = $("#btnShow"),
		$elDivShow = $("#divShow");

	function fnClearForm() {
		$elFormMovie[0].reset();
		// console.log("Form cleared!");		
	}

	function fnSaveMovie() {
		var $valCode = $("#fieldCode").val(),
			$valName = $("#fieldName").val(),
			$valYear = $("#fieldYear").val();
		
		$valCode = $valCode.toUpperCase();

		var aMovie = {
			"_id": $valCode,
			"mName": $valName,
			"mYear": $valYear
		}
		// console.log(aMovie);
		
		db.put(aMovie, function(error, success) {
			if(success) {
				fnClearForm();				
				// console.log(success);
				fnShowMovies();
				$("#popSaved").popup();
				$("#popSaved").popup("open");
			} else {
				switch(error.status) {
					case 409:
						$("#popErrorDupe").popup();
						$("#popErrorDupe").popup("open");
						break;
					
					case 412:
						$("#popErrorCode").popup();
						$("#popErrorCode").popup("open");
						break;
					
					default:
						console.log(error);
						alert("Error")
						break;
				}
			}
		});
	}

	function fnShowMovies() {
		db.allDocs({
			"include_docs": true,
			"ascending": true
		}, function(error, success) {
			if(success) {
				// console.log(success.rows);
				fnShowMoviesTable(success.rows);		
			} else {
				console.log(error);
			}
		});
	}

	function fnShowMoviesTable(data) {
		var str = "<p><table id='tableMovies'>" +
				"<tr><th>Code</th><th>Name</th><th>Year</th><th class='thEmpty'>&nbsp;</th></tr>";
		
		for(var i = 0; i < data.length; i++) {
			str += "<tr><td>" + data[i].doc._id + 
			"</td><td>" + data[i].doc.mName +
			"</td><td>" + data[i].doc.mYear +
			"</td><td class='btnPencil'>&#x270e;</td></tr>";
		}

		str += "</table></p>";
		str += "<p class='ui-body ui-body-b'><input type='text' placeholder='AOD' size='10' id='fieldDelete'> <button id='btnDelete'>Delete Movie</button></p>"
		
		$elDivShow.html(str);
		$elDivShow.hide().fadeIn(250);
	}

	function fnUpdateMoviePrep(thisObj) {
		// console.log(thisObj);
		var $tempCode = thisObj.find("td:eq(0)").text(),
			$tempName = thisObj.find("td:eq(1)").text(),
			$tempYear = thisObj.find("td:eq(2)").text(),
			$elDivEdit = $("#divEdit");

		var str = "";

		str += "<input type='text' placeholder='AOD' disabled hidden id='fieldUpdateCode'><br>" +
			"<input type='text' placeholder='Army of Darkness' id='fieldUpdateName'><br>" +
			"<input type='number' placeholder='1992' id='fieldUpdateYear'><br>" +
			"<button id='btnUpdate'>Update Movie</button>";

		$elDivEdit.html(str);
		$("#h1Update").html("Updating " + $tempCode);
		
		$("#fieldUpdateCode").val($tempCode);
		$("#fieldUpdateName").val($tempName);
		$("#fieldUpdateYear").val($tempYear);
		
		$("#popMovieUpdate").popup();
		$("#popMovieUpdate").popup("open", {
			"positionTo": "window",
			"transition": "flip"
		});
	}

	function fnUpdateMovie() {
		var $updateCode = $("#fieldUpdateCode").val(),
			$updateName = $("#fieldUpdateName").val(),
			$updateYear = $("#fieldUpdateYear").val();

		db.get($updateCode, function(error, success) {
			if(error) {
				console.log(error);
				alert("Error!")
			} else {
				db.put({
					"_id": success._id,
					"mName": $updateName,
					"mYear": $updateYear,
					"_rev": success._rev
				}, function(error, success) {
					if(error) {
						console.log(error);
						alert("Error!")
					} else {
						$("#popMovieUpdate").popup("close");
						fnShowMovies();
					}
				});
			}
		});
	}

	function fnDeleteMovie() {
		var $valTheCode = $("#fieldDelete").val();
		$valTheCode = $valTheCode.toUpperCase();

		db.get($valTheCode, function(error, success) {
			if(success) {
				db.remove(success, function(error, success) {
					if(success) {
						fnShowMovies();
						$("#popDeleted").popup();
						$("#popDeleted").popup("open");
					} else {
						console.log(error);
						$("#popErrorNull").popup();
						$("#popErrorNull").popup("open");
					}
				});
			} else {
				console.log(error);
				$("#popErrorNull").popup();
				$("#popErrorNull").popup("open");
			}
		})
	}

	function fnNuke() {
		switch(confirm("Your are about to delete EVERYTHING. \n Confirms?")) {
			case true:
				db.destory(function(error, success) {
					if(error) {
						console.log(error);
						alert("Error deleting database");
					} else {
						initDB();
						$elDivShow.show().fadeOut(2000);
					}
				})
				break;
			
			case false:
				console.log("Delete cancelled");		
				break;

			default:
				console.log("Third error?");			
				break;
		}
	}
	
	$elBtnReset.on("click", fnClearForm);
	$elBtnSave.on("click", fnSaveMovie);
	$elBtnShow.on("click", fnShowMovies);

	$("#divShow").on("click", ".btnPencil", function() {
		fnUpdateMoviePrep($(this).parent())
	});
	$("#divEdit").on("click", "#btnUpdate", fnUpdateMovie);
	$("#divShow").on("click", "#btnDelete", fnDeleteMovie);
	$("#btnNuke").on("click", fnNuke);
});