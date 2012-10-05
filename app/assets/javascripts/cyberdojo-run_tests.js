/*jsl:option explicit*/

var cyberDojo = (function($cd, $j) {

  $cd.preRunTests = function() {
    $j('#test').attr('disabled', true);
    $j('#spinner_lhs').show();
    $j('#spinner_rhs').show();
    $j('#tip').hide();
  };

  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $cd.postRunTests = function() {
    $j('#tip').hide();
    $j('#spinner_lhs').hide();
    $j('#spinner_rhs').hide();
    $j('#test').attr('disabled', false);
    // when the AJAX js replaces output shortcuts are lost
    // so need to rebind them    
    var output = $cd.fileContentFor('output');
    $cd.bindHotKeys(output);        
    $cd.loadFile('output');
  };

  return $cd;
})(cyberDojo || {}, $);


