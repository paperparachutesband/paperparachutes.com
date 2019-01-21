<?php
  $debug = false;
  
  $email = $_GET['email'];
  //$email = $_POST['email'];
  if ($debug) {
    echo $email . '<br/>';
  }
  
  $api_key = '1c9003036a2484a6c74f487602a3dfc7-us7';
  if ($debug) {
    echo $api_key . '<br/>';
  }
  
  $list_id = 'b0b2c34436';
  if ($debug) {
    echo $list_id. '<br/>';
  }
  
  $auth = base64_encode('user:' . $api_key);
  if ($debug) {
    echo $auth. '<br/>';
  }
  
  //$memberId = md5(strtolower($email));
  $dataCenter = substr($api_key,strpos($api_key,'-')+1);

  $url = 'https://' . $dataCenter . '.api.mailchimp.com/3.0/lists/' . $list_id . '/members';
  if ($debug) {
    echo $url. '<br/>';
  }
  
  $pfb_data = array(
    'email_address' => $email,
    'status'        => 'subscribed'
  );
  if ($debug) {
    echo $pfb_data. '<br/>';
  }
  
  $encoded_pfb_data = json_encode($pfb_data);
  if ($debug) {
    echo $encoded_pfb_data. '<br/>';
  }
  
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_USERPWD,  $auth);
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json', 'Authorization: Basic ' . $auth));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_USERAGENT, 'PHP-MCAPI/3.0');
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $encoded_pfb_data);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

  $results_output = curl_exec($ch); 
  $response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $errors = curl_error($ch); 
  
  curl_close($ch);

  $results = array(
    'results_output' => $results_output,
    'response_code' => $response_code,
    'errors' => $errors
  );

  if ($debug) {
    echo json_encode($results);
  }
  
  if ($results['response'] == 400) {
      echo "<h4>There is a problem with your submission from our mailing list provider. Please contact Paper Parachutes directly to subscribe.</h4>";
  } elseif ($results['response'] == 200) {
    echo "<h4>Thank you, you have been added to our mailing list.</h4>";
  } else {
      echo "<h4>There is an unknown issue plaguing the system.  Bear with us!  Please try again!  If the problem persists, contact Paper Parachutes directly!</h4>";
  }
?>
