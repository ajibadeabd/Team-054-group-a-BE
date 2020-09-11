module.exports = (link) => {
    return `
    <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
        <meta charset="utf-8">
    </head>
    <style>
    ​
        body {
            font-family: sans-serif;
            padding: 10px;
            margin: 30px;
            text-align: center;
            background-color:#545050 ;
        }
    ​
        h1 {
            text-align: center;
            color: #1F2430;
        }
    ​
        p {
            color: #1F2430;
            text-align: center;
            margin-top: 3%;
        }
    ​
        .container {
            padding: 20px;
            background-color: white;
            display: center;
            border: solid white 1px;
        }
    ​
    ​
        button {
            width: 15em;
            margin-top: 5%;
            height: 1.5cm;
            background-color: #FB3F5C;
            border: none;
            color: white;
            font-size: large;
        }
    </style>
    ​
    <body>
        <div class="container">
            <h1>Forgot Password</h1>
            <p>Seems like you forgot your Password,<br>Click on the button below to rest your password<br></p>
    ​
            <a  href="${link}" class="btn btn-primary btn-lg">Reset Password</a>
            <p style="color: #545050;">If you did not request a password reset, you can safely ignore this email.</p>
        </div>
    </body>
    ​
    </html>
       `
  }