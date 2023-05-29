function showLoanOptions() {
    document.getElementById("overlayL").style.display = "block";
  }
  
  function approveLoan(name) {
    // Perform actions to approve the selected credit card
    // For example, remove the selected credit card from the table
    var table = document.getElementById("loanTable");
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        
        // Loop through each cell in the row
          var cell = row.cells[2];
          if (cell.innerHTML === name){
            table.deleteRow(i);
            break;

          }

      }
  }
  
  function rejectLoan(name) {
    // Perform actions to reject the selected credit card
    // For example, display a message or log the rejection
    var table = document.getElementById("loanTable");
    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        
        // Loop through each cell in the row
          var cell = row.cells[2];
          if (cell.innerHTML === name){
            table.deleteRow(i);
            break;

          }

      }
  }
  
  function closeModalL() {
    document.getElementById("overlayL").style.display = "none";
  }