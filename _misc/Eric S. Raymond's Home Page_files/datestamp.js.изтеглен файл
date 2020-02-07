// JavaScript to generate a compact date representation

//
// format date as yyyy-mm-dd
//
function date_ddmmmyyyy(date)
{
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();

  return "" + y + "-" + (m<10?"0"+m:m) + "-" + (d<10?"0"+d:d);
}

//
// get last modified date of the 
// current document.
//
function date_lastmodified()
{
  var lmd = document.lastModified;
  var s   = "Unknown";
  var d1;

  // check if we have a valid date
  // before proceeding
  if(0 != (d1=Date.parse(lmd)))
  {
    s = "" + date_ddmmmyyyy(new Date(d1));
  }

  return s;
}

//
// finally display the last modified date
// as DD-MMM-YYYY
//
document.writeln( 
  date_lastmodified() );

// End
