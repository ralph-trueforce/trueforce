<?php

class TF_Email_Config
{
    public $smtp_host = 'smtp.gmail.com';
    public $smtp_port = '587';
    public $smtp_username = 'iintoomail@iintoo.com';
    public $smtp_password = 'Iintoo123';
    public $smtp_auth_type = 'tls';
    public $smtp_no_reply_email = 'noreply@iintoo.com';

    public $to_address = "ralph.asendeteufrer@trueforce.com";
    public $cc = array();
    public $from_name = "";
    public $subject = "Contact Us email ";

    public function html() {

        return "<div> Mesasge: {$_POST['message']} <br><br> Email: {$_POST['email']} </div>";
    }
};

require "PhpMailer.php";

$phpMailer = new PHPMailer();

$config = new TF_Email_Config();

$phpMailer->IsSMTP();
$phpMailer->SMTPAuth 	= true;
$phpMailer->CharSet		= "UTF-8";

$phpMailer->Host 		= $config->smtp_host;
$phpMailer->Port 		= $config->smtp_port;  // 587
$phpMailer->Username 	= $config->smtp_username;
$phpMailer->Password 	= $config->smtp_password;
$phpMailer->SMTPSecure 	= $config->smtp_auth_type;
$phpMailer->From     	= $config->smtp_no_reply_email;
$phpMailer->IsHTML(true);

$phpMailer->AddAddress($config->to_address);

if (!empty($config->cc)) {
    foreach ($config->cc as $address) {
        $phpMailer->AddAddress($address);
    }
}
$phpMailer->subject     = $phpMailer->subject . " (" . $_POST['name'] . ")";
$phpMailer->FromName 	= $config->from_name = $_POST['name'];
$phpMailer->Subject 	= $config->subject;
$phpMailer->Body 		= $config->html();

$res = 1;
$message = "Message sent!";
if (!$phpMailer->Send()) {
    $message = "Mailer Error: " . $phpMailer->ErrorInfo;
    $res = 0;
}
echo $message;

$redirect = "//" . $_SERVER['HTTP_HOST'] . "/" .  $_POST['current'] . "?q=" . $res;

echo $redirect;

header("Location: $redirect");
