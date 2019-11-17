<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>mailverarbeitung</title>
</head>
<body>

      <?php

              $email_from =             "absender@domain.de";                   // SENDER IF NOT DEFINED
              $sendermail =             true;                                   // BOOLEAN - TAKE ADDRESS OF SENDER T/F
              $name_of_emailfield =     "email-input";                          // NAME OF THE FIELD  OF THE FORM WHICH CONTAINS THE SENDER ADDRESS
              $receiver =               "jerome.haas@gmx.ch";                   // RECEIVER OF THE MAIL
              $subject =                "neue Nachricht der Website";           // SUBJECT OF THE MAIL
              $url_success =            "../pages/demorequest_success.php";     // REDIRECT USER WHEN SUCCESS
              $url_error =              "../pages/demorequest_error.php";     // REDIRECT USER WHEN ERROR
              //$ignore_fields =        array();                                // NAME THE FILED OF THE FORM YOU WANT TO IGNORE


              // TAKE ALL INPUT FIELDS AN ADD TO MESSAGE EXCEPT FROM DEFINED IGNORED FIELDS
              while (list($name,$value) = each($_POST)) {
                 if (in_array($name, $ignore_fields)) {
                      continue;
                 }
                 $msg .= "::: $name :::\n$value\n\n";
              }


              // SET THE SENDER EMAIL-ADDRESS AS SENDER ADDRESS WHEN POSSIBLE
              if ($sendermail and isset($_POST[$name_of_emailfield]) and filter_var($_POST[$name_of_emailfield], FILTER_VALIDATE_EMAIL)) {
                 $email_from = $_POST[$name_of_emailfield];
              }


              // SET THE HEADER OF THE MAIL TO THE SENDER EMAIL-ADDRESS
              $header="From: $email_from";


              // SEND THE MAILING
              $mail_send = mail($receiver,$subject,$msg,$header);


              // REDIRECT THE USER TO SUCCESS-SITE OR ERROR-SITE
              if($mail_send){
                header("Location: ".$url_success);
                exit();
              } else{
                header("Location: ".$url_error);
                exit();
              }

      ?>

</body>
</html>